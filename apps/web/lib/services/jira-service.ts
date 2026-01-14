
import { prisma } from "@/lib/prisma"

interface JiraConfig {
    domain: string
    email: string
    apiToken: string
    defaultProject?: string
}

export class JiraService {
    private config: JiraConfig

    constructor(config: JiraConfig) {
        this.config = config
    }

    static async getForUser(userId: string): Promise<JiraService | null> {
        const integration = await prisma.integration.findUnique({
            where: {
                userId_provider: {
                    userId,
                    provider: "jira",
                },
            },
        })

        if (!integration) return null

        const config = integration.config as unknown as JiraConfig
        return new JiraService(config)
    }

    /**
     * extracting Jira issue keys from text (e.g. "PROJ-123")
     */
    extractIssueKeys(text: string): string[] {
        // Regex for typical Jira keys: uppercase letters + hyphen + numbers
        const regex = /([A-Z]+-\d+)/g
        const matches = text.match(regex)
        return matches ? [...new Set(matches)] : []
    }

    private getAuthHeader(): string {
        return `Basic ${Buffer.from(`${this.config.email}:${this.config.apiToken}`).toString("base64")}`
    }

    private getBaseUrl(): string {
        let host = this.config.domain.replace(/^https?:\/\//, "").replace(/\/$/, "")
        return `https://${host}/rest/api/3`
    }

    async postComment(issueKey: string, content: string): Promise<boolean> {
        const url = `${this.getBaseUrl()}/issue/${issueKey}/comment`

        // Convert basic markdown to Jira ADF (Atlassian Document Format) or just use plain text/v2 API
        // Jira Cloud API v3 expects ADF. For simplicity, we'll construct a simple ADF document.
        // A robust implementation would use a markdown-to-adf parser.
        const adfBody = {
            version: 1,
            type: "doc",
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: content
                        }
                    ]
                }
            ]
        }

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: this.getAuthHeader(),
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ body: adfBody }),
            })

            if (!res.ok) {
                console.error(`[JiraService] Failed to post comment to ${issueKey}: ${res.statusText}`)
                // v3 might require simpler body if we just send string? No, v3 requires ADF.
                // Let's try v2 if v3 fails? No, keep it simple.
                return false
            }

            return true
        } catch (error) {
            console.error(`[JiraService] Error posting comment to ${issueKey}:`, error)
            return false
        }
    }

    async createIssue(projectKey: string, summary: string, description: string): Promise<string | null> {
        // Implement simple issue creation
        const url = `${this.getBaseUrl()}/issue`

        const body = {
            fields: {
                project: {
                    key: projectKey
                },
                summary: summary,
                description: {
                    type: "doc",
                    version: 1,
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: description
                                }
                            ]
                        }
                    ]
                },
                issuetype: {
                    name: "Task" // Assumption: 'Task' type exists
                }
            }
        }

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: this.getAuthHeader(),
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(body),
            })

            if (!res.ok) {
                const err = await res.text()
                console.error(`[JiraService] Failed to create issue: ${err}`)
                return null
            }

            const data = await res.json()
            return data.key
        } catch (error) {
            console.error(`[JiraService] Error creating issue:`, error)
            return null
        }
    }

    async syncSession(session: { description: string, codeSnippet?: string | null, language?: string | null }) {
        const keys = this.extractIssueKeys(session.description)

        let message = `**FlowPilot Session**\n\n${session.description}`
        if (session.codeSnippet) {
            message += `\n\nCode Snippet (${session.language || 'text'}):\n${session.codeSnippet.substring(0, 500)}... (truncated)`
        }

        if (keys.length > 0) {
            // Post to extracted keys
            await Promise.all(keys.map(key => this.postComment(key, message)))
            return { synced: true, keys }
        } else if (this.config.defaultProject) {
            // Create new issue in default project
            // const newKey = await this.createIssue(this.config.defaultProject, `Session: ${session.description.substring(0, 50)}`, message)
            // return { synced: true, created: newKey }
            // For now, just logging that we WOULD create one, to match plan "post comment" focus first
            return { synced: false, reason: "No keys found, default project creation not enabled yet" }
        }

        return { synced: false, reason: "No keys found" }
    }
}

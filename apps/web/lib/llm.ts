export async function generateTip(context: string): Promise<{ tip: string; title: string; explanation: string }> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        console.warn("OPENROUTER_API_KEY is not set. Returning mock tip.");
        return {
            title: "Console Table",
            tip: "Did you know? You can use `console.table()` to display arrays of objects in a readable tabular format.",
            explanation: "The `console.table()` method displays tabular data as a table. This function takes one mandatory argument data, which must be an array or an object, and one additional optional argument columns."
        };
    }

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": "https://flowpilot.dev",
                "X-Title": "FlowPilot",
                "X-API-KEY": apiKey,
            },
            body: JSON.stringify({
                model: "google/gemini-2.0-flash-lite-preview-02-05:free",
                messages: [
                    {
                        role: "system",
                        content: `You are a helpful coding mentor for a user named FlowPilot.
            Generate a unique, advanced "Tip of the Day" for a software developer.
            Return ONLY a valid JSON object with the following fields:
            - "title": A short catchy title.
            - "tip": The clean, concise tip (max 2 sentences).
            - "explanation": A detailed explanation of why it works or how to use it (markdown supported, code blocks allowed).
            
            Focus on best practices, hidden features, or performance tricks in detailed contexts.`
                    },
                    {
                        role: "user",
                        content: `Context: ${context || "General web development"}`
                    }
                ],
                response_format: { type: "json_object" }
            })
        });

        if (!response.ok) {
            throw new Error(`OpenRouter API error: ${response.statusText}`);
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content;

        try {
            return JSON.parse(content);
        } catch (e) {
            console.error("Failed to parse tip JSON:", content);
            return {
                title: "Code Formatting",
                tip: "Always comment your code and keep it formatted!",
                explanation: "Proper indentation and comments make your code easier to read and maintain for yourself and others."
            };
        }
    } catch (error) {
        console.error("Failed to generate tip:", error);
        return {
            title: "Error Handling",
            tip: "Did you know? Consistent code formatting helps reduce bugs and improves readability.",
            explanation: "It seems we had trouble generating a new tip. But here's a default one: Try to use try-catch blocks for async operations!"
        };
    }
}

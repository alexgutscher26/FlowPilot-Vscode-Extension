// FlowPilot Webview JavaScript
(function () {
    const vscode = acquireVsCodeApi();

    // DOM Elements
    const reviewFileBtn = document.getElementById('review-file-btn');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    const explanationCard = document.getElementById('explanation-card');
    const optimizeBtn = document.getElementById('optimize-btn');
    const docstringBtn = document.getElementById('docstring-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const moreBtn = document.getElementById('more-btn');
    const robotIcon = document.getElementById('fp-icon-robot')?.innerHTML ?? '';

    // Initialize
    function initialize() {
        setupEventListeners();
        addWelcomeMessage();
    }

    function setupEventListeners() {
        // Review file button
        reviewFileBtn.addEventListener('click', () => {
            vscode.postMessage({
                type: 'reviewFile',
                content: '',
                filename: ''
            });
        });

        // Chat input
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Action buttons
        optimizeBtn.addEventListener('click', () => {
            vscode.postMessage({ type: 'optimizeCode' });
        });

        docstringBtn.addEventListener('click', () => {
            vscode.postMessage({ type: 'addDocstring' });
        });

        // Header buttons
        refreshBtn.addEventListener('click', () => {
            location.reload();
        });

        moreBtn.addEventListener('click', () => {
            // Show more options menu
            console.log('More options clicked');
        });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            vscode.postMessage({
                type: 'sendMessage',
                text: message
            });
            chatInput.value = '';
        }
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;

        if (sender === 'ai') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <span class="fp-icon">${robotIcon}</span>
                </div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }

        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function addWelcomeMessage() {
        const welcomeMessage = "Hello! I'm FlowPilot, your AI coding coach. I can help you understand your code better. Select some code and I'll explain it to you!";
        addMessage(welcomeMessage, 'ai');
    }

    function addExplanation(explanation) {
        const explanationSteps = document.getElementById('explanation-steps');
        explanationSteps.innerHTML = '';

        explanation.steps.forEach((step, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'explanation-step';
            stepDiv.innerHTML = `
                <div class="step-number">${step.line}</div>
                <div class="step-content">
                    <strong>${step.title}:</strong> ${step.description}
                </div>
            `;
            explanationSteps.appendChild(stepDiv);
        });

        // Show the explanation card
        explanationCard.classList.remove('hidden');
        explanationCard.classList.add('fade-in');
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle messages from the extension
    window.addEventListener('message', event => {
        const message = event.data;

        switch (message.type) {
            case 'streamingStart':
                // Show loading indicator
                addMessage('Analyzing your code...', 'ai');
                break;

            case 'streamingChunk':
                // Optional: Show streaming progress (can be disabled for cleaner UX)
                // For now, we'll just wait for the final result
                console.log('Streaming chunk received:', message.content.length, 'chars');
                break;

            case 'aiResponse':
                addMessage(message.text, 'ai');
                break;

            case 'showExplanation':
                const data = message.explanation;

                // Render Overview
                addMessage(data.overview, 'ai');

                // Render Line-by-Line
                if (data.lineByLine && data.lineByLine.length > 0) {
                    const steps = data.lineByLine.map(item => ({
                        line: item.line,
                        title: item.content.trim(), // simple title for now
                        description: item.explanation
                    }));

                    const explanationObj = { steps: steps };
                    addExplanation(explanationObj);
                }

                // Render Concepts & Suggestions
                if (data.concepts || data.suggestions) {
                    const conceptsHtml = data.concepts ?
                        `<div class="chips-container"><strong>Concepts:</strong> ${data.concepts.map(c => `<span class="chip">${c}</span>`).join('')}</div>` : '';

                    const suggestionsHtml = data.suggestions ?
                        `<div class="suggestions-container"><strong>Suggestions:</strong><ul>${data.suggestions.map(s => `<li>${s}</li>`).join('')}</ul></div>` : '';

                    const footerDiv = document.createElement('div');
                    footerDiv.className = 'chat-message ai explanation-footer';
                    footerDiv.innerHTML = `
                        <div class="message-content">
                            ${conceptsHtml}
                            ${suggestionsHtml}
                        </div>
                    `;
                    chatMessages.appendChild(footerDiv);
                    scrollToBottom();
                }
                break;

            case 'showErrorExplanation':
                const errorData = message.explanation;

                // Create error explanation message with structured sections
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.className = 'chat-message ai error-explanation';

                let errorHtml = '<div class="message-avatar"><span class="fp-icon">' + robotIcon + '</span></div>';
                errorHtml += '<div class="message-content">';

                // Plain English section
                if (errorData.plainEnglish) {
                    errorHtml += `<div class="error-section"><strong>🔴 What this means:</strong><p>${errorData.plainEnglish}</p></div>`;
                }

                // Why it happens section
                if (errorData.whyItHappens) {
                    errorHtml += `<div class="error-section"><strong>❓ Why it happens:</strong><p>${errorData.whyItHappens}</p></div>`;
                }

                // How to fix section
                if (errorData.howToFix && errorData.howToFix.length > 0) {
                    errorHtml += '<div class="error-section"><strong>✅ How to fix:</strong><ol>';
                    errorData.howToFix.forEach(step => {
                        errorHtml += `<li>${step}</li>`;
                    });
                    errorHtml += '</ol></div>';
                }

                // Prevention section
                if (errorData.prevention) {
                    errorHtml += `<div class="error-section"><strong>🛡️ Prevention:</strong><p>${errorData.prevention}</p></div>`;
                }

                errorHtml += '</div>';
                errorMessageDiv.innerHTML = errorHtml;

                chatMessages.appendChild(errorMessageDiv);
                scrollToBottom();
                break;

            case 'explainCode':
                addMessage(`I'll explain this code...`, 'ai');
                break;

            case 'showReview':
                const review = message.review;

                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'chat-message ai review-card';

                // Avatar
                const avatarDiv = document.createElement('div');
                avatarDiv.className = 'message-avatar';
                const avatarSpan = document.createElement('span');
                avatarSpan.className = 'fp-icon';
                avatarSpan.textContent = robotIcon;
                avatarDiv.appendChild(avatarSpan);

                // Message content container
                const messageContentDiv = document.createElement('div');
                messageContentDiv.className = 'message-content';

                // Review header
                const reviewHeaderDiv = document.createElement('div');
                reviewHeaderDiv.className = 'review-header';

                const headerTitle = document.createElement('h3');
                headerTitle.textContent = 'Code Review';

                const reviewScoreDiv = document.createElement('div');
                reviewScoreDiv.className = 'review-score';
                const scoreClass = review.score >= 7 ? 'high' : review.score >= 4 ? 'medium' : 'low';
                reviewScoreDiv.classList.add(scoreClass);
                reviewScoreDiv.textContent = `${review.score}/10`;

                reviewHeaderDiv.appendChild(headerTitle);
                reviewHeaderDiv.appendChild(reviewScoreDiv);

                // "Does" section
                const doesSectionDiv = document.createElement('div');
                doesSectionDiv.className = 'review-section';
                const doesStrong = document.createElement('strong');
                doesStrong.textContent = '✅ Does:';
                const doesParagraph = document.createElement('p');
                doesParagraph.textContent = review.does;
                doesSectionDiv.appendChild(doesStrong);
                doesSectionDiv.appendChild(doesParagraph);

                // "Issues" section
                const issuesSectionDiv = document.createElement('div');
                issuesSectionDiv.className = 'review-section';
                const issuesStrong = document.createElement('strong');
                issuesStrong.textContent = '⚠️ Issues:';
                const issuesList = document.createElement('ul');
                if (Array.isArray(review.issues)) {
                    review.issues.forEach(issue => {
                        const li = document.createElement('li');
                        li.textContent = issue;
                        issuesList.appendChild(li);
                    });
                }
                issuesSectionDiv.appendChild(issuesStrong);
                issuesSectionDiv.appendChild(issuesList);

                // "Better Version" section
                const betterSectionDiv = document.createElement('div');
                betterSectionDiv.className = 'review-section';
                const betterStrong = document.createElement('strong');
                betterStrong.textContent = '✨ Better Version:';
                const betterParagraph = document.createElement('p');
                betterParagraph.textContent = review.whyBetter;
                const pre = document.createElement('pre');
                const code = document.createElement('code');
                code.textContent = review.improvedCode;
                pre.appendChild(code);
                betterSectionDiv.appendChild(betterStrong);
                betterSectionDiv.appendChild(betterParagraph);
                betterSectionDiv.appendChild(pre);

                // Assemble message content
                messageContentDiv.appendChild(reviewHeaderDiv);
                messageContentDiv.appendChild(doesSectionDiv);
                messageContentDiv.appendChild(issuesSectionDiv);
                messageContentDiv.appendChild(betterSectionDiv);

                // Assemble final review card
                reviewDiv.appendChild(avatarDiv);
                reviewDiv.appendChild(messageContentDiv);

                chatMessages.appendChild(reviewDiv);
                scrollToBottom();
                break;
        }
    });

    // Initialize the webview
    initialize();
})();

// Main script for the Code Coach webview panel

// Get VS Code API
const vscode = acquireVsCodeApi();

// State management
let currentExplanation = null;
let feedbackSubmitted = false;
let currentTheme = null;

// Initialize the webview
document.addEventListener('DOMContentLoaded', () => {
    console.log('Code Coach webview loaded');
    
    // Initialize theme detection and adaptation
    initializeThemeSystem();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Send ready message to extension
    vscode.postMessage({
        type: 'ready'
    });
});

// Theme System Initialization
function initializeThemeSystem() {
    // Use initial theme information passed from extension
    if (window.initialTheme) {
        console.log('Using initial theme from extension:', window.initialTheme);
        applyTheme(window.initialTheme.className.replace('theme-', ''));
    } else {
        // Fallback: detect theme from CSS variables
        detectAndApplyTheme();
    }
    
    // Listen for theme changes from extension
    window.addEventListener('message', (event) => {
        if (event.data.type === 'themeChanged') {
            handleThemeChange(event.data.theme);
        }
    });
    
    // Fallback: Monitor for CSS variable changes
    observeThemeChanges();
    
    // Apply accessibility preferences
    applyAccessibilityPreferences();
    
    // Validate initial color contrast
    setTimeout(validateColorContrast, 500); // Delay to ensure CSS is loaded
}

function detectAndApplyTheme() {
    // Try to detect theme from VS Code CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    const backgroundColor = computedStyle.getPropertyValue('--vscode-editor-background').trim();
    const foregroundColor = computedStyle.getPropertyValue('--vscode-foreground').trim();
    
    let detectedTheme = 'dark'; // Default fallback
    
    if (backgroundColor && foregroundColor) {
        // Simple heuristic: if background is lighter than foreground, it's likely light theme
        const bgLuminance = getLuminance(backgroundColor);
        const fgLuminance = getLuminance(foregroundColor);
        
        if (bgLuminance > fgLuminance) {
            detectedTheme = 'light';
        } else {
            detectedTheme = 'dark';
        }
    }
    
    // Check for high contrast
    const contrastBorder = computedStyle.getPropertyValue('--vscode-contrastBorder').trim();
    if (contrastBorder) {
        detectedTheme = 'high-contrast';
    }
    
    applyTheme(detectedTheme);
}

function applyTheme(themeName) {
    if (currentTheme === themeName) return;
    
    currentTheme = themeName;
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('theme-light', 'theme-dark', 'theme-high-contrast');
    
    // Apply new theme class
    body.classList.add(`theme-${themeName}`);
    
    // Set data attribute for CSS targeting
    body.setAttribute('data-vscode-theme-kind', `vscode-${themeName}`);
    
    // Validate color contrast after theme change
    validateColorContrast();
    
    console.log(`Applied theme: ${themeName}`);
}

function handleThemeChange(themeInfo) {
    if (themeInfo && themeInfo.kind) {
        const themeMap = {
            1: 'light',
            2: 'dark',
            3: 'high-contrast'
        };
        
        const themeName = themeMap[themeInfo.kind] || 'dark';
        applyTheme(themeName);
    }
}

function observeThemeChanges() {
    // Create a mutation observer to watch for CSS variable changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                // Re-detect theme when CSS variables might have changed
                setTimeout(detectAndApplyTheme, 100);
            }
        });
    });
    
    // Observe changes to the document element's style attribute
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['style']
    });
}

function applyAccessibilityPreferences() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');
    }
    
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast-preference');
    }
    
    // Check for color scheme preference as fallback
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('prefers-light');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('prefers-dark');
    }
}

function validateColorContrast() {
    // Validate that text has sufficient contrast
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, li, button');
    
    textElements.forEach(element => {
        const style = getComputedStyle(element);
        const textColor = style.color;
        const backgroundColor = getEffectiveBackgroundColor(element);
        
        if (textColor && backgroundColor) {
            const contrastRatio = getContrastRatio(textColor, backgroundColor);
            
            // WCAG AA standard requires 4.5:1 for normal text
            if (contrastRatio < 4.5) {
                console.warn(`Low contrast detected on element:`, element, `Ratio: ${contrastRatio.toFixed(2)}`);
                // Apply high contrast class to improve readability
                element.classList.add('low-contrast-fix');
            }
        }
    });
}

function getEffectiveBackgroundColor(element) {
    // Walk up the DOM tree to find the effective background color
    let currentElement = element;
    
    while (currentElement && currentElement !== document.body) {
        const style = getComputedStyle(currentElement);
        const bgColor = style.backgroundColor;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
            return bgColor;
        }
        
        currentElement = currentElement.parentElement;
    }
    
    // Fallback to body background
    return getComputedStyle(document.body).backgroundColor || '#1e1e1e';
}

function getLuminance(color) {
    // Convert color to RGB values
    const rgb = parseColor(color);
    if (!rgb) return 0;
    
    // Calculate relative luminance
    const [r, g, b] = rgb.map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(color1, color2) {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
}

function parseColor(color) {
    // Simple RGB color parser
    if (color.startsWith('rgb(')) {
        const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : null;
    }
    
    if (color.startsWith('rgba(')) {
        const match = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
        return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : null;
    }
    
    if (color.startsWith('#')) {
        const hex = color.slice(1);
        if (hex.length === 3) {
            return [
                parseInt(hex[0] + hex[0], 16),
                parseInt(hex[1] + hex[1], 16),
                parseInt(hex[2] + hex[2], 16)
            ];
        } else if (hex.length === 6) {
            return [
                parseInt(hex.slice(0, 2), 16),
                parseInt(hex.slice(2, 4), 16),
                parseInt(hex.slice(4, 6), 16)
            ];
        }
    }
    
    return null;
}

// Handle messages from the extension
window.addEventListener('message', event => {
    const message = event.data;
    
    switch (message.type) {
        case 'update':
            updateContent(message.data);
            break;
        case 'error':
            showError(message.data);
            break;
        case 'clear':
            clearContent();
            break;
    }
});

function initializeEventListeners() {
    // Feedback button listeners
    const helpfulBtn = document.getElementById('helpful-btn');
    const notHelpfulBtn = document.getElementById('not-helpful-btn');
    const submitFeedbackBtn = document.getElementById('submit-feedback-btn');
    const cancelFeedbackBtn = document.getElementById('cancel-feedback-btn');

    if (helpfulBtn) {
        helpfulBtn.addEventListener('click', () => handleFeedbackClick(true));
    }

    if (notHelpfulBtn) {
        notHelpfulBtn.addEventListener('click', () => handleFeedbackClick(false));
    }

    if (submitFeedbackBtn) {
        submitFeedbackBtn.addEventListener('click', submitFeedback);
    }

    if (cancelFeedbackBtn) {
        cancelFeedbackBtn.addEventListener('click', cancelFeedback);
    }
}

function updateContent(data) {
    console.log('Updating content:', data);
    currentExplanation = data;
    feedbackSubmitted = false;

    // Hide welcome message and show explanation content
    const welcomeElement = document.getElementById('welcome');
    const explanationElement = document.getElementById('explanation');
    
    if (welcomeElement) {
        welcomeElement.style.display = 'none';
    }
    
    if (explanationElement) {
        explanationElement.style.display = 'block';
    }

    // Update context header
    updateContextHeader(data);

    // Update content based on type
    switch (data.type) {
        case 'explain':
            renderExplanation(data);
            break;
        case 'review':
            renderReview(data);
            break;
        case 'error':
            renderError(data);
            break;
        default:
            console.warn('Unknown content type:', data.type);
    }

    // Reset feedback section
    resetFeedbackSection();
}

function updateContextHeader(data) {
    const operationTypeElement = document.getElementById('operation-type');
    const fileInfoElement = document.getElementById('file-info');

    if (operationTypeElement) {
        let operationText = '';
        switch (data.type) {
            case 'explain':
                operationText = '📖 Code Explanation';
                break;
            case 'review':
                operationText = '🔍 Code Review';
                break;
            case 'error':
                operationText = '🚨 Error Analysis';
                break;
        }
        operationTypeElement.textContent = operationText;
    }

    if (fileInfoElement) {
        // This would be populated with actual file info from the extension
        fileInfoElement.textContent = 'Python file';
    }
}

function renderExplanation(data) {
    // Show/hide relevant sections
    showSection('summary-section');
    showSection('line-by-line-section');
    hideSection('error-meaning-section');
    hideSection('error-context-section');
    hideSection('error-fix-section');
    hideSection('good-points-section');
    hideSection('improvements-section');

    // Update summary
    updateElementContent('summary-content', data.summary);

    // Update line-by-line explanations
    renderLineByLineExplanations(data.lineByLine || []);

    // Update optional sections
    if (data.pitfalls && data.pitfalls.length > 0) {
        showSection('pitfalls-section');
        renderList('pitfalls-content', data.pitfalls);
    } else {
        hideSection('pitfalls-section');
    }

    if (data.tryItYourself) {
        showSection('try-it-section');
        updateElementContent('try-it-content', data.tryItYourself);
    } else {
        hideSection('try-it-section');
    }

    if (data.relatedConcepts && data.relatedConcepts.length > 0) {
        showSection('related-concepts-section');
        renderList('related-concepts-content', data.relatedConcepts);
    } else {
        hideSection('related-concepts-section');
    }
}

function renderReview(data) {
    // Show/hide relevant sections
    showSection('summary-section');
    hideSection('line-by-line-section');
    hideSection('error-meaning-section');
    hideSection('error-context-section');
    hideSection('error-fix-section');
    showSection('good-points-section');
    showSection('improvements-section');

    // Update summary
    updateElementContent('summary-content', data.summary);

    // Update good points
    renderList('good-points-content', data.goodPoints || [], 'good-point');

    // Update improvements
    renderImprovements(data.improvements || []);

    // Update optional sections
    if (data.tryItYourself) {
        showSection('try-it-section');
        updateElementContent('try-it-content', data.tryItYourself);
    } else {
        hideSection('try-it-section');
    }

    hideSection('pitfalls-section');
    hideSection('related-concepts-section');
}

function renderError(data) {
    // Show/hide relevant sections
    hideSection('summary-section');
    hideSection('line-by-line-section');
    showSection('error-meaning-section');
    showSection('error-context-section');
    showSection('error-fix-section');
    hideSection('good-points-section');
    hideSection('improvements-section');

    // Update error sections
    updateElementContent('error-meaning-content', data.errorMeaning);
    updateElementContent('error-context-content', data.whyHere);
    updateElementContent('error-fix-content', data.howToFix);

    // Update optional sections
    if (data.tryItYourself) {
        showSection('try-it-section');
        updateElementContent('try-it-content', data.tryItYourself);
    } else {
        hideSection('try-it-section');
    }

    if (data.relatedConcepts && data.relatedConcepts.length > 0) {
        showSection('related-concepts-section');
        renderList('related-concepts-content', data.relatedConcepts);
    } else {
        hideSection('related-concepts-section');
    }

    hideSection('pitfalls-section');
}

function renderLineByLineExplanations(lineExplanations) {
    const container = document.getElementById('line-explanations');
    if (!container) return;

    container.innerHTML = '';

    lineExplanations.forEach((line, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'line-explanation';

        const lineNumber = document.createElement('div');
        lineNumber.className = 'line-number';
        lineNumber.textContent = `Line ${line.lineOffset + 1}`;

        const lineCode = document.createElement('div');
        lineCode.className = 'line-code';
        lineCode.textContent = line.code;

        const lineText = document.createElement('div');
        lineText.className = 'line-text';
        lineText.textContent = line.explanation;

        lineDiv.appendChild(lineNumber);
        lineDiv.appendChild(lineCode);
        lineDiv.appendChild(lineText);

        container.appendChild(lineDiv);
    });
}

function renderImprovements(improvements) {
    const container = document.getElementById('improvements-content');
    if (!container) return;

    container.innerHTML = '';

    improvements.forEach((improvement, index) => {
        const improvementDiv = document.createElement('div');
        improvementDiv.className = 'improvement-item';

        const description = document.createElement('div');
        description.className = 'improvement-description';
        description.textContent = improvement.description;

        improvementDiv.appendChild(description);

        if (improvement.improvedCode) {
            const code = document.createElement('div');
            code.className = 'improvement-code';
            code.textContent = improvement.improvedCode;
            improvementDiv.appendChild(code);
        }

        const reasoning = document.createElement('div');
        reasoning.className = 'improvement-reasoning';
        reasoning.textContent = improvement.reasoning;
        improvementDiv.appendChild(reasoning);

        container.appendChild(improvementDiv);
    });
}

function renderList(containerId, items, itemClass) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (items.length === 0) return;

    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        if (itemClass) {
            li.className = itemClass;
        }
        li.textContent = item;
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

function hideSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'none';
    }
}

function updateElementContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    }
}

function clearContent() {
    // Show welcome message and hide explanation content
    const welcomeElement = document.getElementById('welcome');
    const explanationElement = document.getElementById('explanation');
    
    if (welcomeElement) {
        welcomeElement.style.display = 'block';
    }
    
    if (explanationElement) {
        explanationElement.style.display = 'none';
    }

    currentExplanation = null;
    feedbackSubmitted = false;
}

function handleFeedbackClick(helpful) {
    if (feedbackSubmitted) return;

    const feedbackComment = document.getElementById('feedback-comment');
    if (feedbackComment) {
        feedbackComment.style.display = 'block';
        
        // Store the feedback choice for later submission
        feedbackComment.helpfulChoice = helpful;
        
        // Focus on textarea
        const textarea = document.getElementById('feedback-text');
        if (textarea) {
            textarea.focus();
        }
    }
}

function submitFeedback() {
    if (feedbackSubmitted) return;

    const feedbackComment = document.getElementById('feedback-comment');
    const textarea = document.getElementById('feedback-text');
    
    if (!feedbackComment || !textarea) return;

    const helpful = feedbackComment.helpfulChoice;
    const comment = textarea.value.trim();

    // Send feedback to extension
    vscode.postMessage({
        type: 'feedback',
        data: {
            helpful: helpful,
            comment: comment || undefined
        }
    });

    // Show thanks message
    showFeedbackThanks();
    feedbackSubmitted = true;
}

function cancelFeedback() {
    const feedbackComment = document.getElementById('feedback-comment');
    const textarea = document.getElementById('feedback-text');
    
    if (feedbackComment) {
        feedbackComment.style.display = 'none';
    }
    
    if (textarea) {
        textarea.value = '';
    }
}

function resetFeedbackSection() {
    const feedbackComment = document.getElementById('feedback-comment');
    const feedbackThanks = document.getElementById('feedback-thanks');
    const textarea = document.getElementById('feedback-text');
    const feedbackControls = document.querySelector('.feedback-controls');
    
    if (feedbackComment) {
        feedbackComment.style.display = 'none';
    }
    
    if (feedbackThanks) {
        feedbackThanks.style.display = 'none';
    }
    
    if (feedbackControls) {
        feedbackControls.style.display = 'flex';
    }
    
    if (textarea) {
        textarea.value = '';
    }
    
    feedbackSubmitted = false;
}

function showFeedbackThanks() {
    const feedbackComment = document.getElementById('feedback-comment');
    const feedbackThanks = document.getElementById('feedback-thanks');
    const feedbackControls = document.querySelector('.feedback-controls');
    
    if (feedbackComment) {
        feedbackComment.style.display = 'none';
    }
    
    if (feedbackControls) {
        feedbackControls.style.display = 'none';
    }
    
    if (feedbackThanks) {
        feedbackThanks.style.display = 'block';
    }
}

function showError(error) {
    console.error('Error:', error);
    
    // Show a simple error message in the content area
    const contentElement = document.getElementById('content');
    if (contentElement) {
        contentElement.innerHTML = `
            <div class="error-message">
                <h3>⚠️ Error</h3>
                <p>${error.message || 'An unexpected error occurred.'}</p>
                <p><em>Please try again or check your Code Coach configuration.</em></p>
            </div>
        `;
    }
}
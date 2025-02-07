const hamburgerButton = document.getElementById('hamburger-button');
const llmPanel = document.getElementById('llm-panel');
const mainContent = document.querySelector('main');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatArea = document.getElementById('chat-area');
let cy;

hamburgerButton.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
    mainContent.classList.toggle('open');
});

sendButton.addEventListener('click', () => {
    const messageText = userInput.value.trim();
    if (messageText === "") return;

    displayMessage(messageText, 'user');
    userInput.value = "";

    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: messageText })
    })
        .then(response => response.json())
        .then(data => {
            displayMessage(data.answer, 'ai');

            if (data.concept_map && data.concept_map.length > 0) {
                const conceptMapData = data.concept_map;
                updateConceptMap(conceptMapData);
            } else {
                console.log("Concept map is undefined or empty. Skipping update.");
                // Optionally, clear the existing concept map if it should be empty:
                // cy.elements().remove();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);

    const messageContent = document.createElement('p');
    messageContent.textContent = message;
    messageDiv.appendChild(messageContent);

    const timestampDiv = document.createElement('div');
    timestampDiv.classList.add('timestamp');
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestampDiv.textContent = timeString;
    messageDiv.appendChild(timestampDiv);

    messageContainer.appendChild(messageDiv);
    chatArea.appendChild(messageContainer);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function updateConceptMap(conceptMapData) {
    cy.elements().remove(); // Clear existing elements

    conceptMapData.forEach(concept => {
        const newNode = { data: { id: concept.NodeName, label: concept.NodeName } };
        cy.add(newNode);

        if (concept.ParentNode) {
            const newEdge = { data: { source: concept.ParentNode, target: concept.NodeName } };
            cy.add(newEdge);
        }
    });

    cy.layout({
        name: 'dagre',
        rankDir: 'TB',
        nodeSep: 75,
        rankSep: 75,
        animate: true,
        animationDuration: 500,
        animationEasing: 'ease-out',
    }).run();
    cy.fit();
    cy.center();
}

userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendButton.click();
    }
});

function domReady(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

domReady(function () {
    try {
        cy = cytoscape({
            container: document.getElementById('cy'),
            elements: [],
            style: [
                {
                    selector: 'node',
                    style: {
                        'shape': 'round-rectangle',
                        'background-color': 'skyblue',
                        'border-color': 'steelblue',
                        'border-width': 2,
                        'label': 'data(label)',
                        'font-size': '16px',
                        'padding': '10px',
                        'text-valign': 'center',
                        'text-halign': 'center',
                        'width': function (ele) {
                            const label = ele.data('label');
                            if (!label) return 50;

                            const ctx = document.createElement('canvas').getContext('2d');
                            ctx.font = '16px sans-serif';
                            const metrics = ctx.measureText(label);
                            const width = metrics.width + 20;
                            return Math.max(50, width);
                        },
                        'height': function (ele) {
                            const label = ele.data('label');
                            if (!label) return 50;

                            const ctx = document.createElement('canvas').getContext('2d');
                            ctx.font = '16px sans-serif';
                            const metrics = ctx.measureText(label);
                            const numLines = label.split('\n').length;
                            const height = (metrics.fontBoundingBoxDescent + metrics.fontBoundingBoxAscent) * numLines + 20;
                            return Math.max(50, height);
                        }
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 1.5,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'none',
                        'curve-style': 'bezier',
                        'control-point-step-size': 30
                    }
                }
            ],
            layout: {
                name: 'dagre',
                rankDir: 'TB',
                nodeSep: 75,
                rankSep: 75
            },
            zoom: 1,
            pan: { x: 0, y: 0 },
            userZoomingEnabled: true,
            userPanningEnabled: true
        });

    } catch (error) {
        console.error("Cytoscape error:", error);
        alert("Cytoscape error. Check console.");
    }
});
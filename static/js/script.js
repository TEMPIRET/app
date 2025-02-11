// Cache for node measurements
const nodeMeasurementCache = new Map();

// DOM Elements
const hamburgerButton = document.getElementById('hamburger-button');
const llmPanel = document.getElementById('llm-panel');
const mainContent = document.querySelector('main');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatArea = document.getElementById('chat-area');
const cyContainer = document.getElementById('cy');

// Optimized node measurement function
function measureNodeText(label) {
    if (!label) return { width: 50, height: 50 };
    
    const cached = nodeMeasurementCache.get(label);
    if (cached) return cached;
    
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.font = '16px sans-serif';
    const metrics = ctx.measureText(label);
    const width = Math.max(50, metrics.width + 20);
    const numLines = Math.ceil(metrics.width / 200);
    const height = Math.max(50, (metrics.fontBoundingBoxDescent + metrics.fontBoundingBoxAscent) * numLines + 20);
    
    const result = { width, height };
    nodeMeasurementCache.set(label, result);
    return result;
}

// Add filter controls
const filterControls = document.createElement('div');
filterControls.id = 'filter-controls';
filterControls.className = 'filter-controls';
filterControls.innerHTML = `
    <h3>Filter by Relationship Type</h3>
    <div class="filter-buttons">
        <button class="filter-btn active" data-category="hierarchical">Hierarchical</button>
        <button class="filter-btn active" data-category="causal">Causal</button>
        <button class="filter-btn active" data-category="descriptive">Descriptive</button>
        <button class="filter-btn active" data-category="process">Process</button>
        <button class="filter-btn active" data-category="participation">Participation</button>
    </div>
`;

cyContainer.parentNode.insertBefore(filterControls, cyContainer);
const filterButtons = document.querySelectorAll('.filter-btn');

// Define relationship categories
const relationshipCategories = {
    hierarchical: ['is a type of', 'is a part of', 'is a member of', 'are members of', 'have part'],
    causal: ['is caused by', 'impacts', 'disrupts', 'alters'],
    descriptive: ['defines', 'is described by', 'is related to'],
    process: ['occurs in', 'releases', 'stores', 'occur between', 'drive', 'contributes to'],
    participation: ['participate in', 'consume']
};

function createElements(data) {
    const nodes = {};
    const elements = [];

    // First pass: Create all nodes mentioned in either NodeName or ParentNode
    data.forEach(item => {
        // Add node from NodeName if it doesn't exist
        const nodeId = item.NodeName;
        if (!nodes[nodeId]) {
            nodes[nodeId] = { 
                data: { 
                    id: nodeId, 
                    label: nodeId,
                    ...measureNodeText(nodeId)
                } 
            };
            elements.push(nodes[nodeId]);
        }

        // Add parent node if it exists and hasn't been added yet
        const parentId = item.ParentNode;
        if (parentId && !nodes[parentId]) {
            nodes[parentId] = {
                data: {
                    id: parentId,
                    label: parentId,
                    ...measureNodeText(parentId)
                }
            };
            elements.push(nodes[parentId]);
        }
    });

    // Second pass: Create edges
    data.forEach(item => {
        const source = item.ParentNode;
        const target = item.NodeName;
        const relationship = item.Relationship;

        if (source) {
            let category = 'other';
            for (const [cat, relationships] of Object.entries(relationshipCategories)) {
                if (relationships.includes(relationship)) {
                    category = cat;
                    break;
                }
            }

            elements.push({
                data: {
                    source: source,
                    target: target,
                    label: relationship,
                    category: category
                }
            });
        }
    });

    return elements;
}

// Updated layout configuration
function updateLayoutConfig() {
    const width = window.innerWidth;
    return {
        name: 'dagre',
        rankDir: 'TB',
        nodeSep: width < 768 ? 50 : 75,
        rankSep: width < 768 ? 50 : 75,
        animate: true,
        animationDuration: 300,
        fit: true,
        padding: 50,
        spacingFactor: 1.5,
        animationEasing: 'ease-in-out',
        stop: function() {
            cy.fit(cy.elements().filter(ele => ele.style('display') === 'element'), 50);
        }
    };
}

// Update the initial cytoscape configuration
const cy = cytoscape({
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
                'text-wrap': 'wrap',
                'width': 'data(width)',
                'height': 'data(height)',
                'visibility': 'visible', // Ensure nodes are visible by default
                'display': 'element'    // Ensure display property is set
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 1.5,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier',
                'control-point-step-size': 30,
                'label': 'data(label)',
                'font-size': '12px',
                'text-background-color': '#fff',
                'text-background-opacity': 0.7,
                'text-background-padding': '2px',
                'text-rotation': 'autorotate',
                'visibility': 'visible', // Ensure edges are visible by default
                'display': 'element'    // Ensure display property is set
            }
        }
    ],
    layout: updateLayoutConfig(),
    minZoom: 0.2,
    maxZoom: 3,
    wheelSensitivity: 0.2
});

// Debounced layout update
const updateLayout = _.debounce((cy) => {
    const visibleElements = cy.elements().filter(ele => ele.style('display') === 'element');
    const layout = cy.layout({
        ...updateLayoutConfig(),
        eles: visibleElements
    });
    
    layout.run();
    
    layout.one('layoutstop', () => {
        cy.fit(visibleElements, 50);
        cy.center();
    });
}, 250);

// Optimized filter application
function applyFilters() {
    const activeCategories = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.category);
    
    cy.batch(() => {
        // First show all nodes
        cy.nodes().style('display', 'element');
        
        // Handle edges based on filters
        cy.edges().forEach(edge => {
            const shouldShow = activeCategories.includes(edge.data('category'));
            edge.style('display', shouldShow ? 'element' : 'none');
        });
        
        // Only hide nodes that have no visible connected edges
        // Keep root nodes visible even without connections
        cy.nodes().forEach(node => {
            const isRoot = node.indegree(false) === 0;
            const hasVisibleEdges = node.connectedEdges().some(edge => 
                edge.style('display') === 'element'
            );
            
            // Show if it's a root node or has visible edges
            node.style('display', (isRoot || hasVisibleEdges) ? 'element' : 'none');
        });
    });
    
    updateLayout(cy);
}

// Chat and concept map update functionality
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    displayMessage(message, 'user');
    userInput.value = '';
    sendButton.disabled = true;
    userInput.disabled = true;
    
    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: message })
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayMessage(data.answer, 'ai');
        
        // Update concept map if new nodes/relationships are received
        if (data.concept_map && data.concept_map.length > 0) {
            updateConceptMapFromBackend(data.concept_map);
        }
    } catch (error) {
        console.error('Error:', error);
        displayMessage('Sorry, there was an error processing your request.', 'ai');
    } finally {
        sendButton.disabled = false;
        userInput.disabled = false;
        userInput.focus();
    }
}

function displayMessage(content, type) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    messageContainer.setAttribute('role', 'listitem');
    
    const message = document.createElement('div');
    message.className = `message ${type}-message`;
    message.textContent = content;
    
    const timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.textContent = new Date().toLocaleTimeString();
    
    messageContainer.appendChild(message);
    messageContainer.appendChild(timestamp);
    chatArea.appendChild(messageContainer);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function updateConceptMapFromBackend(conceptMapData) {
    const elements = createElements(conceptMapData);
    
    // Store current viewport state
    const zoom = cy.zoom();
    const pan = cy.pan();
    
    // Update graph
    cy.elements().remove();
    cy.add(elements);
    
    // Apply layout with animation
    const layout = cy.layout(updateLayoutConfig());
    layout.run();
    
    // Restore viewport with animation
    cy.animate({
        zoom: zoom,
        pan: pan,
        duration: 500,
        easing: 'ease-in-out'
    });
    
    applyFilters();
}

// Navigation handling
hamburgerButton.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});

document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    if (window.innerWidth <= 768 && 
        nav.classList.contains('open') && 
        !nav.contains(e.target) && 
        e.target !== hamburgerButton) {
        nav.classList.remove('open');
    }
});

// Event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        applyFilters();
    });
});

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Handle window resize
window.addEventListener('resize', _.debounce(() => {
    updateLayout(cy);
}, 250));

// Initialize empty concept map
cy.ready(() => {
    updateLayout(cy);
});
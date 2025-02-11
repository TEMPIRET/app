const biogeochemical_cycles = [
    {
        "NodeName": "Biogeochemical Cycles",
        "Relationship": "defines",
        "ParentNode": null
    },
    {
        "NodeName": "Carbon Cycle",
        "Relationship": "is a type of",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Nitrogen Cycle",
        "Relationship": "is a type of",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Water Cycle (Hydrologic Cycle)",
        "Relationship": "is a type of",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Phosphorus Cycle",
        "Relationship": "is a type of",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Sulfur Cycle",
        "Relationship": "is a type of",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Reservoirs",
        "Relationship": "is a part of",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Fluxes",
        "Relationship": "occur between",
        "ParentNode": "Reservoirs"
    },
    {
        "NodeName": "Processes",
        "Relationship": "drive",
        "ParentNode": "Fluxes"
    },
    {
        "NodeName": "Atmosphere",
        "Relationship": "is a member of",
        "ParentNode": "Reservoirs"
    },
    {
        "NodeName": "Oceans",
        "Relationship": "is a member of",
        "ParentNode": "Reservoirs"
    },
    {
        "NodeName": "Rocks",
        "Relationship": "is a member of",
        "ParentNode": "Reservoirs"
    },
    {
        "NodeName": "Soil",
        "Relationship": "is a member of",
        "ParentNode": "Reservoirs"
    },
    {
        "NodeName": "Living Organisms",
        "Relationship": "are members of",
        "ParentNode": "Reservoirs"
    },
    {
        "NodeName": "Photosynthesis",
        "Relationship": "occurs in",
        "ParentNode": "Carbon Cycle"
    },
    {
        "NodeName": "Uses light energy to convert CO2 and water to glucose and oxygen",
        "Relationship": "is described by",
        "ParentNode": "Photosynthesis"
    },
    {
        "NodeName": "Respiration",
        "Relationship": "occurs in",
        "ParentNode": "Carbon Cycle"
    },
    {
        "NodeName": "Breaks down glucose to release energy, CO2, and water",
        "Relationship": "is described by",
        "ParentNode": "Respiration"
    },
    {
        "NodeName": "Decomposition",
        "Relationship": "occurs in",
        "ParentNode": "Carbon Cycle"
    },
    {
        "NodeName": "Decomposition",
        "Relationship": "is caused by",
        "ParentNode": "Decomposers"
    },
    {
        "NodeName": "Combustion",
        "Relationship": "impacts",
        "ParentNode": "Carbon Cycle"
    },
    {
        "NodeName": "Burning of fossil fuels and biomass, releasing CO2",
        "Relationship": "is described by",
        "ParentNode": "Combustion"
    },
    {
        "NodeName": "Fossilization",
        "Relationship": "is a part of",
        "ParentNode": "Carbon Cycle"
    },
    {
        "NodeName": "Formation of coal, oil, and natural gas from ancient organic matter",
        "Relationship": "is described by",
        "ParentNode": "Fossilization"
    },
    {
        "NodeName": "Nitrogen Fixation",
        "Relationship": "occurs in",
        "ParentNode": "Nitrogen Cycle"
    },
    {
        "NodeName": "Nitrogen-fixing bacteria",
        "Relationship": "is caused by",
        "ParentNode": "Nitrogen Fixation"
    },
    {
        "NodeName": "Nitrification",
        "Relationship": "occurs in",
        "ParentNode": "Nitrogen Cycle"
    },
    {
        "NodeName": "Nitrifying bacteria",
        "Relationship": "is caused by",
        "ParentNode": "Nitrification"
    },
    {
        "NodeName": "Denitrification",
        "Relationship": "occurs in",
        "ParentNode": "Nitrogen Cycle"
    },
    {
        "NodeName": "Denitrifying bacteria",
        "Relationship": "is caused by",
        "ParentNode": "Denitrification"
    },
    {
        "NodeName": "Assimilation",
        "Relationship": "occurs in",
        "ParentNode": "Nitrogen Cycle"
    },
    {
        "NodeName": "Uptake of nitrogen by plants",
        "Relationship": "is described by",
        "ParentNode": "Assimilation"
    },
    {
        "NodeName": "Ammonification",
        "Relationship": "occurs in",
        "ParentNode": "Nitrogen Cycle"
    },
    {
        "NodeName": "Decomposers",
        "Relationship": "is caused by",
        "ParentNode": "Ammonification"
    },
    {
        "NodeName": "Evaporation",
        "Relationship": "is a part of",
        "ParentNode": "Water Cycle (Hydrologic Cycle)"
    },
    {
        "NodeName": "Transpiration",
        "Relationship": "is a part of",
        "ParentNode": "Water Cycle (Hydrologic Cycle)"
    },
    {
        "NodeName": "Condensation",
        "Relationship": "is a part of",
        "ParentNode": "Water Cycle (Hydrologic Cycle)"
    },
    {
        "NodeName": "Precipitation",
        "Relationship": "is a part of",
        "ParentNode": "Water Cycle (Hydrologic Cycle)"
    },
    {
        "NodeName": "Runoff",
        "Relationship": "is a part of",
        "ParentNode": "Water Cycle (Hydrologic Cycle)"
    },
    {
        "NodeName": "Infiltration",
        "Relationship": "is a part of",
        "ParentNode": "Water Cycle (Hydrologic Cycle)"
    },
    {
        "NodeName": "Weathering",
        "Relationship": "releases",
        "ParentNode": "Phosphorus Cycle"
    },
    {
        "NodeName": "Erosion",
        "Relationship": "contributes to",
        "ParentNode": "Phosphorus Cycle"
    },
    {
        "NodeName": "Sedimentation",
        "Relationship": "stores",
        "ParentNode": "Phosphorus Cycle"
    },
    {
        "NodeName": "Assimilation",
        "Relationship": "occurs in",
        "ParentNode": "Phosphorus Cycle"
    },
    {
        "NodeName": "Decomposition",
        "Relationship": "releases",
        "ParentNode": "Phosphorus Cycle"
    },
    {
        "NodeName": "Volcanic Emissions",
        "Relationship": "release",
        "ParentNode": "Sulfur Cycle"
    },
    {
        "NodeName": "Acid Rain Formation",
        "Relationship": "is related to",
        "ParentNode": "Sulfur Cycle"
    },
    {
        "NodeName": "Decomposition",
        "Relationship": "releases",
        "ParentNode": "Sulfur Cycle"
    },
    {
        "NodeName": "Weathering",
        "Relationship": "releases",
        "ParentNode": "Sulfur Cycle"
    },
    {
        "NodeName": "Producers",
        "Relationship": "participate in",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Ecosystems",
        "Relationship": "have part",
        "ParentNode": "Producers"
    },
    {
        "NodeName": "Consumers",
        "Relationship": "participate in",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Consumers",
        "Relationship": "consume",
        "ParentNode": "Producers"
    },
    {
        "NodeName": "Decomposers",
        "Relationship": "participate in",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Pollution",
        "Relationship": "disrupts",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Deforestation",
        "Relationship": "disrupts",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Climate Change",
        "Relationship": "impacts",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Increased greenhouse gas concentrations",
        "Relationship": "is caused by",
        "ParentNode": "Climate Change"
    },
    {
        "NodeName": "Fertilizer Use",
        "Relationship": "alters",
        "ParentNode": "Biogeochemical Cycles"
    },
    {
        "NodeName": "Nitrogen Cycle",
        "Relationship": "impacts",
        "ParentNode": "Fertilizer Use"
    }
]

// Constants and element selections
const hamburgerButton = document.getElementById('hamburger-button');
const llmPanel = document.getElementById('llm-panel');
const mainContent = document.querySelector('main');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatArea = document.getElementById('chat-area');
const cyContainer = document.getElementById('cy');

// Add modal styles
const styles = document.createElement('style');
styles.textContent = `
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 31, 45, 0.5);
    z-index: 1000;
    animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-content {
    position: relative;
    background-color: #ffffff;
    margin: 10vh auto;
    padding: 0;
    width: 90%;
    max-width: 600px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(20px);
    opacity: 0;
    animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
}

.modal-title {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1f2d;
    font-weight: 600;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #64748b;
    padding: 0.5rem;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
}

.modal-close:hover {
    color: #1a1f2d;
    background-color: #f8fafc;
}

.modal-body {
    padding: 1.5rem;
    max-height: 70vh;
    overflow-y: auto;
    color: #1a1f2d;
}

.node-details {
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 1rem;
}

.node-details h3 {
    color: #1a1f2d;
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 600;
}

.node-details ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.node-details li {
    padding: 0.75rem;
    border-radius: 6px;
    background-color: #ffffff;
    margin-bottom: 0.5rem;
    border: 1px solid #e2e8f0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #64748b;
}

.node-details li strong {
    color: #1a1f2d;
    font-weight: 500;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .modal-content {
        margin: 5vh auto;
        width: 95%;
    }
    
    .modal-title {
        font-size: 1.25rem;
    }
    
    .modal-header {
        padding: 1rem;
    }
    
    .modal-body {
        padding: 1rem;
    }
}
`;

// Create and add modal HTML structure
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title"></h2>
            <button class="modal-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-body"></div>
    </div>
`;

document.body.appendChild(modal);
document.head.appendChild(styles);

// Modal control functions
function showModal(title, content) {
    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-body').innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Event listeners for modal
modal.querySelector('.modal-close').addEventListener('click', hideModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        hideModal();
    }
});

// Toggle navigation
hamburgerButton.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});

// Close navigation when clicking outside on mobile
document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    if (window.innerWidth <= 768 && 
        nav.classList.contains('open') && 
        !nav.contains(e.target) && 
        e.target !== hamburgerButton) {
        nav.classList.remove('open');
    }
});

// Add filter controls to the HTML
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

// Insert filter controls before the concept map
cyContainer.parentNode.insertBefore(filterControls, cyContainer);

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

    data.forEach(item => {
        const id = item.NodeName;
        if (!nodes[id]) {
            nodes[id] = { data: { id: id, label: item.NodeName } };
            elements.push(nodes[id]);
        }
    });

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

function updateLayoutConfig() {
    const width = window.innerWidth;
    return {
        name: 'dagre',
        rankDir: 'TB',
        nodeSep: width < 768 ? 50 : 75,
        rankSep: width < 768 ? 50 : 75,
        animate: true,
        animationDuration: 500,
        animationEasing: 'ease-in-out'
    };
}

const elements = createElements(biogeochemical_cycles);

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: elements,
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
                    const numLines = Math.ceil(metrics.width / 200);
                    const height = (metrics.fontBoundingBoxDescent + metrics.fontBoundingBoxAscent) * numLines + 20;
                    return Math.max(50, height);
                },
                'cursor': 'pointer'
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
                'text-rotation': 'autorotate'
            }
        }
    ],
    layout: updateLayoutConfig()
});

// Add node click handler
cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    const nodeData = node.data();
    
    // Get connected edges
    const connectedEdges = node.connectedEdges();
    
    // Prepare content for modal
    let content = `
        <div class="node-details">
            <h3>Connected Relationships:</h3>
            <ul>
    `;
    
    connectedEdges.forEach(edge => {
        const edgeData = edge.data();
        const isSource = edgeData.source === nodeData.id;
        const otherNode = isSource ? edge.target() : edge.source();
        
        content += `
            <li>
                ${isSource ? 'To' : 'From'} <strong>${otherNode.data('label')}</strong>: 
                ${edgeData.label}
            </li>
        `;
    });
    
    content += '</ul></div>';
    
    showModal(nodeData.label, content);
});

// Handle filter button clicks
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        applyFilters();
    });
});

function applyFilters() {
    const activeCategories = Array.from(filterButtons)
        .filter(btn => btn.classList.contains('active'))
        .map(btn => btn.dataset.category);

    cy.edges().forEach(edge => {
        const category = edge.data('category');
        const shouldShow = activeCategories.includes(category);
        edge.style('display', shouldShow ? 'element' : 'none');
    });

    cy.nodes().forEach(node => {
        const hasVisibleEdges = node.connectedEdges().some(edge => edge.style('display') !== 'none');
        node.style('display', hasVisibleEdges ? 'element' : 'none');
    });

    const layout = cy.layout({
        ...updateLayoutConfig(),
        eles: cy.elements().filter(ele => ele.style('display') === 'element')
    });

    layout.run();
    
    setTimeout(() => {
        cy.fit(cy.elements().filter(ele => ele.style('display') === 'element'), 50);
        cy.center();
    }, 600);
}

// Initialize the layout
cy.layout(updateLayoutConfig()).run();
cy.fit();
cy.center();

// Add zoom handling
document.addEventListener('wheel', function(e) {
    if (!e.target.closest('#cy')) return;
    e.preventDefault();
    const delta = e.deltaY;
    const position = {
        x: e.offsetX,
        y: e.offsetY
    };
    
    cy.zoom({
        level: cy.zoom() * Math.pow(1.1, -Math.sign(delta)),
        position: position
    });
}, { passive: false });

// Touch event handling
let touchStartX = 0;
let touchStartY = 0;
let lastPinchDistance = 0;

cy.on('touchstart', function(evt) {
    const touches = evt.touches;
    
    if (touches.length === 1) {
        touchStartX = touches[0].clientX;
        touchStartY = touches[0].clientY;
    } else if (touches.length === 2) {
        lastPinchDistance = Math.hypot(
            touches[0].clientX - touches[1].clientX,
            touches[0].clientY - touches[1].clientY
        );
    }
});

cy.on('touchmove', function(evt) {
    const touches = evt.touches;
    
    if (touches.length === 1) {
        const deltaX = touchStartX - touches[0].clientX;
        const deltaY = touchStartY - touches[0].clientY;
        
        cy.panBy({
            x: -deltaX,
            y: -deltaY
        });
        
        touchStartX = touches[0].clientX;
        touchStartY = touches[0].clientY;
    } else if (touches.length === 2) {
        const currentPinchDistance = Math.hypot(
            touches[0].clientX - touches[1].clientX,
            touches[0].clientY - touches[1].clientY
        );
        
        const pinchDelta = currentPinchDistance - lastPinchDistance;
        const zoomDelta = pinchDelta * 0.01;
        
        const midX = (touches[0].clientX + touches[1].clientX) / 2;
        const midY = (touches[0].clientY + touches[1].clientY) / 2;
        
        cy.zoom({
            level: cy.zoom() * (1 + zoomDelta),
            position: { x: midX, y: midY }
        });
        
        lastPinchDistance = currentPinchDistance;
    }
});

// Handle window resize
window.addEventListener('resize', _.debounce(() => {
    cy.layout(updateLayoutConfig()).run();
}, 250));

// Chat functionality
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage('user', message);
        userInput.value = '';
        setTimeout(() => {
            addMessage('ai', `Received: ${message}`);
        }, 1000);
    }
}

function addMessage(type, content) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    
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
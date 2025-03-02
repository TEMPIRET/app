// Course and topic data
const courseData = [
    { id: "FSC111", code: "FSC111", name: "Foundations of Biological Sciences" },
    { id: "FSC112", code: "FSC112", name: "Introduction to Earth Sciences" },
    { id: "FSC113", code: "FSC113", name: "Chemistry Fundamentals" },
    { id: "FSC114", code: "FSC114", name: "Physics and Mechanics" },
    { id: "FSC115", code: "FSC115", name: "Environmental Science" },
    { id: "ZOO111", code: "ZOO111", name: "Introduction to Zoology" },
    { id: "BTN111", code: "BTN111", name: "Botany Principles" }
  ];
  
  const topicData = {
    "FSC111": [
      { id: "biogeochemical-cycles", name: "Biogeochemical Cycles", description: "Study of chemical element movement through ecosystems" },
      { id: "cell-biology", name: "Cell Biology", description: "Structure and function of cells" },
      { id: "genetics", name: "Genetics", description: "Inheritance and variation of traits" },
      { id: "evolution", name: "Evolution", description: "Change in heritable characteristics" },
      { id: "ecology", name: "Ecology", description: "Organism-environment interactions" }
    ],
    "FSC112": [
      { id: "geology", name: "Geology", description: "Earth's structure and composition" },
      { id: "plate-tectonics", name: "Plate Tectonics", description: "Movement of lithospheric plates" },
      { id: "weathering", name: "Weathering and Erosion", description: "Breakdown of Earth materials" },
      { id: "natural-resources", name: "Natural Resources", description: "Earth's materials and utilization" },
      { id: "climate", name: "Climate Science", description: "Earth's climate systems" }
    ],
    "FSC113": [
      { id: "atomic-structure", name: "Atomic Structure", description: "Fundamental composition of matter" },
      { id: "periodic-table", name: "Periodic Table", description: "Organization of elements" },
      { id: "chemical-bonding", name: "Chemical Bonding", description: "Formation of compounds" },
      { id: "reactions", name: "Chemical Reactions", description: "Transformation of substances" },
      { id: "organic-chemistry", name: "Organic Chemistry", description: "Carbon-based compounds" }
    ],
    "FSC114": [
      { id: "mechanics", name: "Mechanics", description: "Motion and forces" },
      { id: "thermodynamics", name: "Thermodynamics", description: "Heat and energy transfer" },
      { id: "electricity", name: "Electricity", description: "Electromagnetic phenomena" },
      { id: "waves", name: "Waves and Optics", description: "Properties of waves and light" },
      { id: "modern-physics", name: "Modern Physics", description: "Quantum mechanics and relativity" }
    ],
    "FSC115": [
      { id: "ecosystems", name: "Ecosystems", description: "Ecological communities" },
      { id: "biodiversity", name: "Biodiversity", description: "Species variety and conservation" },
      { id: "pollution", name: "Pollution", description: "Environmental contaminants" },
      { id: "sustainability", name: "Sustainability", description: "Resource management" },
      { id: "climate-change", name: "Climate Change", description: "Global climate shifts" }
    ],
    "ZOO111": [
      { id: "animal-diversity", name: "Animal Diversity", description: "Classification of animals" },
      { id: "anatomy", name: "Comparative Anatomy", description: "Animal structure analysis" },
      { id: "physiology", name: "Animal Physiology", description: "Function of animal systems" },
      { id: "behavior", name: "Animal Behavior", description: "Patterns of animal actions" },
      { id: "evolution-zoo", name: "Evolutionary Zoology", description: "Animal evolutionary paths" }
    ],
    "BTN111": [
      { id: "plant-anatomy", name: "Plant Anatomy", description: "Structure of plants" },
      { id: "plant-physiology", name: "Plant Physiology", description: "Plant function and processes" },
      { id: "plant-diversity", name: "Plant Diversity", description: "Classification of plants" },
      { id: "plant-ecology", name: "Plant Ecology", description: "Plants in ecosystems" },
      { id: "plant-reproduction", name: "Plant Reproduction", description: "Life cycles of plants" }
    ]
  };
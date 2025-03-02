document.addEventListener('DOMContentLoaded', function() {
  // Initialize course selection
  const courseContainer = document.getElementById('course-container');
  const topicContainer = document.getElementById('topic-container');
  const selectedCourseElem = document.getElementById('selected-course');
  const topicsGrid = document.getElementById('topics-grid');
  const backButton = document.getElementById('back-button');
  
  // Check URL parameters - if coming back from concept map
  const urlParams = new URLSearchParams(window.location.search);
  const courseParam = urlParams.get('course');
  
  // Populate courses
  populateCourses();
  
  // If we have a course parameter, show topics immediately
  if (courseParam) {
      showTopics(courseParam);
  }
  
  // Event delegation for course selection
  document.querySelector('.grid-container').addEventListener('click', function(e) {
    const card = e.target.closest('.card');
    if (!card) return;
    
    const courseId = card.dataset.id;
    showTopics(courseId);
  });
  
  // Back button
  backButton.addEventListener('click', function() {
    topicContainer.style.display = 'none';
    courseContainer.style.display = 'block';
    
    // Clear course parameter from URL if present
    if (courseParam) {
      history.replaceState(null, '', '/entry');
    }
  });
  
  // Functions
  function populateCourses() {
    const gridContainer = courseContainer.querySelector('.grid-container');
    
    courseData.forEach(course => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.id = course.id;
      
      card.innerHTML = `
        <h2>${course.code}</h2>
        <p>${course.name}</p>
      `;
      
      gridContainer.appendChild(card);
    });
  }
  
  function showTopics(courseId) {
    // Update header
    const course = courseData.find(c => c.id === courseId);
    selectedCourseElem.textContent = course.code;
    
    // Clear and populate topics
    topicsGrid.innerHTML = '';
    
    topicData[courseId].forEach(topic => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.id = topic.id;
      card.dataset.course = courseId;
      
      card.innerHTML = `
        <h2>${topic.name}</h2>
        <p>${topic.description}</p>
      `;
      
      card.addEventListener('click', function() {
        // Redirect to concept map with course and topic parameters
        window.location.href = `/concept_map?course=${courseId}&topic=${topic.id}`;
      });
      
      topicsGrid.appendChild(card);
    });
    
    // Show topic container, hide course container
    courseContainer.style.display = 'none';
    topicContainer.style.display = 'block';
  }
});
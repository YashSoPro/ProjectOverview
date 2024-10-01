// Use jQuery for easy DOM manipulation
$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('.navbar-collapse').toggle();
  });
});

// Example of Axios call (if you want to fetch project data dynamically)
axios.get('https://api.example.com/projects')
  .then(response => {
    console.log('Projects data:', response.data);
    // Dynamically populate projects section if needed
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  });

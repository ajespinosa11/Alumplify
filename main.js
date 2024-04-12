// JavaScript to toggle dropdown visibility
document.getElementById('resources-toggle').addEventListener('click', function() {
  var resourcesDropdown = document.getElementById('resources-dropdown');
  var servicesDropdown = document.getElementById('services-dropdown');

  // Toggle visibility of resources dropdown
  resourcesDropdown.classList.toggle('active');

  // Hide services dropdown if it's active
  if (servicesDropdown.classList.contains('active')) {
      servicesDropdown.classList.remove('active');
  }
});

// JavaScript to toggle dropdown visibility
document.getElementById('services-toggle').addEventListener('click', function() {
  var resourcesDropdown = document.getElementById('resources-dropdown');
  var servicesDropdown = document.getElementById('services-dropdown');

  // Toggle visibility of services dropdown
  servicesDropdown.classList.toggle('active');

  // Hide resources dropdown if it's active
  if (resourcesDropdown.classList.contains('active')) {
      resourcesDropdown.classList.remove('active');
  }
});

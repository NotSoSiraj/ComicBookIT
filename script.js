// Get the current URL
var currentUrl = window.location.href;

// Get all the navigation links
var navLinks = document.querySelectorAll('.nav a');

// Loop through the links and check if they match the current URL
for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentUrl) {
    // Add the active class to the corresponding list item
    navLinks[i].parentNode.classList.add('active');
  } else {
    navLinks[i].parentNode.classList.remove('active');
  }
}

document.getElementById('darkBtn2').addEventListener('click', function() {
  document.body.classList.toggle('dark');
});

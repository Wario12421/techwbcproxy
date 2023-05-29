document.addEventListener("DOMContentLoaded", function () {
  // Get the search input and search button
  var searchInput = document.getElementById("searchInput");
  var searchButton = document.getElementById("searchButton");

  // Add click event listener to the search button
  searchButton.addEventListener("click", function () {
    // Get the entered URL from the search input
    var url = searchInput.value.trim();

    // Check if a valid URL is entered
    if (isValidUrl(url)) {
      // Redirect to the entered URL
      window.location.href = url;
    }
  });

  // Function to validate URL format
  function isValidUrl(url) {
    // Regular expression pattern for URL validation
    var urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    
    // Check if the entered URL matches the pattern
    return urlPattern.test(url);
  }
});

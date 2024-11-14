// Select the elements
const buyButton = document.querySelector('.buy-button');
const apiButton = document.querySelector('.api-button');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-section input');
const loadingSpinner = document.querySelector('.loading-spinner');

// Add event listeners to buttons
buyButton.addEventListener('click', () => {
  alert('Item added to cart!');
});

apiButton.addEventListener('click', () => {
  alert('Redirecting to API Tutorial');
});

searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  if (query.trim()) {
    // Show loading animation
    loadingSpinner.style.display = 'inline-block';
    
    // Simulate a search operation
    setTimeout(() => {
      alert(`Searching for: ${query}`);
      // Hide loading animation
      loadingSpinner.style.display = 'none';
    }, 2000); // Simulate 2 seconds of search time
  } else {
    alert('Please enter a search term.');
  }
});

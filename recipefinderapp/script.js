document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value; // Get the search query from the input
    searchRecipes(query); // Call the searchRecipes function with the query
});

function searchRecipes(query) {
    const apiKey = 'a2eb5c73c36b452786f0ac3ebf09b908'; // Your Spoonacular API key
    const apiURL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}`; // Construct the API URL with the query and API key
    
    fetch(apiURL) // Make the API request
        .then(response => response.json()) // Convert the response to JSON
        .then(data => displayRecipes(data.results)) // Pass the results to the displayRecipes function
        .catch(error => console.error('Error:', error)); // Log any errors to the console
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes'); // Get the container to display recipes
    recipesContainer.innerHTML = ''; // Clear any existing content
    
    recipes.forEach(recipe => { // Iterate through the array of recipes
        const recipeElement = document.createElement('div'); // Create a new div for each recipe
        recipeElement.classList.add('recipe'); // Add the 'recipe' class
        
        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}"> <!-- Display the recipe image -->
            <div class="recipe-info">
                <h2>${recipe.title}</h2> <!-- Display the recipe title -->
                <p>ID: ${recipe.id}</p> <!-- Display the recipe ID -->
            </div>
        `;
        
        recipesContainer.appendChild(recipeElement); // Append the recipe element to the container
    });
}

const apiKey = 'YOUR_API_KEY';
const endpoint = 'https://api.giphy.com/v1/gifs/random';

// Function to fetch a random Giphy GIF
async function fetchGiphy() {
    try {
        const response = await fetch($ { endpoint } ? api_key = $ { apiKey });
        const data = await response.json();
        const gifUrl = data.data.image_url;

        // Insert the Giphy GIF into the container
        document.getElementById('giphyContainer').innerHTML = < img src = "${gifUrl}"
        alt = "Giphy GIF" > ;
    } catch (error) {
        console.error('Error fetching Giphy GIF:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchGiphy);
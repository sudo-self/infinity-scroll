const endpoint = 'https://us-east-2.aws.data.mongodb-api.com/app/data-qxcto/endpoint/data/v1';
const apiKey = 'sAzw32NKLSf0Oq1OcNVeZkq2x1lOFGwt5XEnNcvINxiOrQaQrjPdjNmXI8f5hsgW'; 

// Function to retrieve posts from the MongoDB Realm endpoint
async function getPosts() {
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` // Include your API key as a Bearer token
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        console.log('Posts:', data);
        // Handle the retrieved posts data here
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the getPosts function
getPosts();




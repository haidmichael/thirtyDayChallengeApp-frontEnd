// this is the connecter for the backend
// Fetch functions for node 

export async function login() {
        try {
            const response = await fetch('https://localhost:3000/login');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
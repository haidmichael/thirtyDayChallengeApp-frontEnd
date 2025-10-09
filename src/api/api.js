// this is the connecter for the backend
// Fetch functions for node 

export async function loginUser(user) {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST', 
                headers: { 'Content-Type' : 'application/json' }, 
                body: JSON.stringify(user)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            console.log(data)
            // return data...?
            return data // Success
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
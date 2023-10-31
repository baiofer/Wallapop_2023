export const sparrestApi = () => {

    const baseUrl = "http://localhost:8000/"

    const get = async (endpoint) => {
        const url = baseUrl + endpoint
        try {
            const response = await fetch(url)
            if(response.ok) {
                const data = await response.json()
                return data
            } else {
                throw new Error('El producto no existe')
            }        
        } catch (error) {
            throw error.message
        }
    }

    const post = async (endpoint, body) => {
        const url = baseUrl + endpoint
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": 'application/json'
                }
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message)
            }
            if (response.ok) {
                return data.accessToken
            }
        } catch (error) {
            if (error.message) {
                throw error.message
            } else {
                throw error
            }
        }
    }

    const remove = async (endpoint) => {
        const url = baseUrl + endpoint
        const token = localStorage.getItem('token')
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": 'application/json',
                    "Authorization": `Bareer ${token}`
                }
            })
            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.message)
            }
        } catch (error) {
            if (error.message) {
                throw error.message
            } else {
                throw error
            }
        }
    }


    return {
        get: get,
        delete: remove,
        post: post,
    }
}
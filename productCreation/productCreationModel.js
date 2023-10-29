

export const createProduct = async (productData) => {
    const url = 'http://localhost:8000/api/products'

    const token = localStorage.getItem('token')

    let response
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(productData),
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
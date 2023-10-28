export const getProducts = async () => {
    const url = 'http://localhost:8000/api/products'
    let productsList = []
    try {
        const response = await fetch(url)
        productsList = await response.json()
    } catch (error) {
        throw error
    }
    return productsList
}

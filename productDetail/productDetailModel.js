import { sparrestApi } from "../utils/sparrestApi.js"

export const getProduct = async (productId) => {
    //const url = `http://localhost:8000/api/products/${productId}`
    
    const product = await sparrestApi().get(`api/products/${productId}`)
    
    return product
}

export const deleteProduct = async (productId) => {
    const url = `http://localhost:8000/api/products/${productId}`

    const token = localStorage.getItem('token')

    await sparrestApi().delete(`api/products/${productId}`)

}
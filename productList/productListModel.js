import { sparrestApi } from "../utils/sparrestApi.js"

export const getProducts = async () => {
    //const url = 'http://localhost:8000/api/products'
    
    const  productsList = await sparrestApi().get('api/products')
    
    return productsList
}

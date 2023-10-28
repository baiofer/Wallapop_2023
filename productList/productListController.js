import { buildProduct, emptyProducts } from "./productListView.js"
import { getProducts } from "./productListModel.js"
import { dispatchEvent } from "../utils/dispatchEvent.js"


export const productListController = async (productList) => {
    productList.innerHTML = ''
    let products = []
    try {
        products = await getProducts()
    } catch (error) {
        dispatchEvent('productsLoaded', { type: 'error', message: 'Error al cargar los productos.' }, tweetList)
    }
    
    if (products.length === 0) {
        productList.innerHTML = emptyProducts()
    } else {
        dispatchEvent('productsLoaded', { type: "success", message: "Se han cargado los productos." }, productList)
        renderProducts(products, productList)
    }
}

const renderProducts = (products, productList) => {
    products.forEach( product => {
        const newProduct = buildProduct(product)
        productList.appendChild(newProduct)
    })
}

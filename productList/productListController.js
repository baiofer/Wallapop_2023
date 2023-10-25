import { buildProduct } from "./productListView.js"
import { products } from "./productListModel.js"

export const productListController = () => {
    products.forEach( product => {
        const newProduct = buildProduct(product)
        const target = document.querySelector('#products')
        target.appendChild(newProduct)
    })
}

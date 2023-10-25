import { buildProduct } from "./productListView.js"
import { products } from "./productListModel.js"

export const productListController = (productList) => {
    products.forEach( product => {
        const newProduct = buildProduct(product)
        productList.appendChild(newProduct)
    })
}

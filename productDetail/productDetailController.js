import { buildProductDetail } from "./productDetailView.js"
import { dispatchEvent } from "../utils/dispatchEvent.js"
import { getProduct } from "./productDetailModel.js"

export const productDetailController = async (productDetail, productId) => {
   
    try {
        const product = await getProduct(productId)
        productDetail.innerHTML = buildProductDetail(product)
    } catch (error) {
        dispatchEvent('productLoaded', { type: 'error', message: error }, productDetail)
        setTimeout(() => {
            window.location = './index.html'
        }, 2000)
    }
}
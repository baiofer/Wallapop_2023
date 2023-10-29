import { buildProductDetail } from "./productDetailView.js"
import { dispatchEvent } from "../utils/dispatchEvent.js"
import { getProduct } from "./productDetailModel.js"
import { decodeToken } from "../utils/decodeToken.js"
import { deleteProduct } from "./productDetailModel.js"

export const productDetailController = async (productDetail, productId) => {
   
    try {
        dispatchEvent('startGetProduct', null, productDetail)
        const product = await getProduct(productId)
        productDetail.innerHTML = buildProductDetail(product)
        handleDeleteProduct(product, productDetail)
    } catch (error) {
        dispatchEvent('productLoaded', { type: 'error', message: error }, productDetail)
        setTimeout(() => {
            window.location = '../index.html'
        }, 2000)
    } finally {
        dispatchEvent('finishGetProduct', null, productDetail)
    }
}

const handleDeleteProduct = (product, productDetail) => {
    const token = localStorage.getItem('token')

    if (token) {
        const { userId } = decodeToken(token)

        if (userId === product.userId) {
            addDeleteProductButton(product, productDetail)
            //addEditProductButton(product, productDetail)
        }
    }
}

const addDeleteProductButton = (product, productDetail) => {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Borrar tweet'

    deleteButton.addEventListener('click', async() => {
        if (confirm('¿Seguro que quieres borrar el producto?')) {
            await deleteProduct(product.id)
            setTimeout(() => {
                window.location = '../index.html'
            }, 2000)
        }
    })

    productDetail.appendChild(deleteButton)
}

/*
const addEditProductButton = (product, productDetail) => {
    const editButton = document.createElement('button')
    editButton.textContent = 'Editar tweet'

    editButton.addEventListener('click', () => {
        // Edito el tweet. LLamo a createTweet.html pasándole parámetros
    })

    productDetail.appendChild(editButton)
}
*/
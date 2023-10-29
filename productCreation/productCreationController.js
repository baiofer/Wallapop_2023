import { createProduct } from "./productCreationModel.js"
import { dispatchEvent } from "../utils/dispatchEvent.js"

export const productCreationController = (productCreation) => {
    
    productCreation.addEventListener('submit', async (event) => {
        event.preventDefault()

        const formData = new FormData(productCreation)
        const data = {
            name: formData.get('productName'),
            price: formData.get('price'),
            sale: formData.get('sale'),
            tags: [formData.get('tags')],
            description: formData.get('description'),
        }
        try {
            await createProduct(data)
            dispatchEvent('productCreated', { type: 'success', message: 'Producto creado correctamente' }, productCreation)
            setTimeout(() => {
                window.location = './index.html'
            }, 2000)
        } catch (error) {
            dispatchEvent('productCreated', { type: 'error', message: error }, productCreation)
        }
    })
}
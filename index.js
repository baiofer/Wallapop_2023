import { notificationsController } from './notofications/notificationsController.js'
import { productListController } from './productList/productListController.js'

const notifications = document.querySelector('#notifications')
const showNotification = notificationsController(notifications)


document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('#products')
        productListController(productList)

    productList.addEventListener('productsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexión', 'error')
})
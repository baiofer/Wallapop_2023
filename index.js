import { notificationsController } from './notifications/notificationsController.js'
import { productListController } from './productList/productListController.js'
import { sessionController } from "./session/sessionController.js";

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('#products')
    const notifications = document.querySelector('#notifications')

    const showNotification = notificationsController(notifications)

    productList.addEventListener('productsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })

    productListController(productList)

    sessionController(session)
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexión', 'error')
})
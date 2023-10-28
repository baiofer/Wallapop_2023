import { notificationsController } from './notifications/notificationsController.js'
import { productListController } from './productList/productListController.js'
import { sessionController } from "./session/sessionController.js";
import { loaderController } from "./loader/loaderController.js"

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('#products')
    const notifications = document.querySelector('#notifications')
    const loader = document.querySelector('#loader')
    
    const { show, hide } = loaderController(loader) 

    const showNotification = notificationsController(notifications)

    productList.addEventListener('productsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })

    productList.addEventListener('startLoadingProducts', () => {
        show()
    })

    productList.addEventListener('finishLoadingProducts', () => {
        hide()
    })

    productListController(productList)

    sessionController(session)
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexión', 'error')
})
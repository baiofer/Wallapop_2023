import { productCreationController } from "./productCreationController.js"
import { notificationsController } from "../notifications/notificationsController.js"
import { loaderController } from "../loader/loaderController.js"

const token = localStorage.getItem('token')
if (!token) {
    window.location = '../index.html'
}

document.addEventListener('DOMContentLoaded', () => {

    const productCreation = document.querySelector('#productCreation')
    const notifications = document.querySelector('#notifications')
    const loader = document.querySelector('#loader')
    
    const { show, hide } = loaderController(loader)

    const showNotification = notificationsController(notifications)

    productCreation.addEventListener('startCreateProduct', () => {
        show()
    })

    productCreation.addEventListener('finishCreateProduct', () => {
        hide()
    })

    productCreation.addEventListener('productCreated', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })

    productCreationController(productCreation)
})
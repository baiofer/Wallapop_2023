import { productCreationController } from "./productCreationController.js"
import { notificationsController } from "../notifications/notificationsController.js"

const token = localStorage.getItem('token')
if (!token) {
    window.location = '../index.html'
}

document.addEventListener('DOMContentLoaded', () => {

    const productCreation = document.querySelector('#productCreation')
    const notifications = document.querySelector('#notifications')

    const showNotification = notificationsController(notifications)

    productCreation.addEventListener('productCreated', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })

    productCreationController(productCreation)
})
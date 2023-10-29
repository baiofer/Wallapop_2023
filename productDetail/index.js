import { productDetailController } from "./productDetailController.js"
import { notificationsController } from "../notifications/notificationsController.js"
import { loaderController } from "../loader/loaderController.js"

document.addEventListener('DOMContentLoaded', () => {

    // Recojo el id de la url
    const params = new URLSearchParams(window.location.search)
    const productId = params.get('id')
    console.log(productId)

    const productDetail = document.querySelector('#productDetail')
    const notifications = document.querySelector('#notifications')
    const loader = document.querySelector('#loader')
    
    const showNotification = notificationsController(notifications)
    
    const { show, hide } = loaderController(loader)

    productDetail.addEventListener('startGetProduct', () => {
        show()
    })

    productDetail.addEventListener('finishGetProduct', () => {
        hide()
    })

    

    productDetail.addEventListener('productLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })

    productDetailController(productDetail, productId)

})
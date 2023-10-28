import { loginController } from './loginController.js'
//import { loaderController } from '../loader/loaderController.js'
import { notificationsController } from '../notifications/notificationsController.js'



document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login')
    //const loader = document.querySelector('#loader')
    //const { show, hide } = loaderController(loader)
    const notificationsSection = document.querySelector('#notifications')
    const showNotification = notificationsController(notificationsSection)

    loginForm.addEventListener('userLogged', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })

    //loginForm.addEventListener('startLogin', () => {
    //    show()
    //})

    //loginForm.addEventListener('finishLogin', () => {
    //    hide()
    //})

    loginController(loginForm)
})
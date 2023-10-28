import { signupController } from "./signupController.js"
import { notificationsController } from "../notifications/notificationsController.js"
import { loaderController } from "../loader/loaderController.js"



document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signup')
    const notificationsSection = document.querySelector('#notifications')
    const loader = document.querySelector('#loader')
    const { show, hide } = loaderController(loader)
    const showNotification = notificationsController(notificationsSection)
        
    signupForm.addEventListener('userCreated', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })
    
    signupForm.addEventListener('startSignup', () => {
        show()
    })

    signupForm.addEventListener('finishSignup', () => {
        hide()
    })
    
    signupController(signupForm)
})
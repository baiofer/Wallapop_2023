import { buildNotification } from "./notificationsView.js"

export const notificationsController = (notifications) => {
    const showNotification = (message, type) => {
        notifications.innerHTML = buildNotification(message, type)
        setTimeout( () => {
            notifications.innerHTML = ''
        }, 2000)
    }
    return showNotification
}
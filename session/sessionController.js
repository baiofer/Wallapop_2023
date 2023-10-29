import { buildAuthenticatedSession, buildUnauthorizedSession } from "./sessionView.js"

export const sessionController = (nav) => {

    if (isUserLoggedIn()) {
        nav.innerHTML = buildAuthenticatedSession()
        const logoutButton = nav.querySelector('#logoutButton')
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('token')
            sessionController(nav)
        })
        const createProductButton = nav.querySelector('#createProductButton')
        createProductButton.addEventListener('click', () => {
            window.location = '../productCreation.html'
        })
    } else {
        nav.innerHTML = buildUnauthorizedSession()
    }
}

const isUserLoggedIn = () => {
    return localStorage.getItem('token')
}
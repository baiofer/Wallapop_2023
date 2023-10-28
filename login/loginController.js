import { loginUser } from "./loginModel.js"
import { dispatchEvent } from "../utils/dispatchEvent.js"

export const loginController = (loginForm) => {
  
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()
        submitLogin(loginForm)
    })   
}

const submitLogin = async (loginForm) => {
    const { email, password } = getLoginData(loginForm)

    try {
        //dispatchEvent('startLogin', null, loginForm)
        const token = await loginUser(email, password)
        localStorage.setItem('token', token)
        dispatchEvent('userLogged', { type: 'success', message: 'Acceso correcto'}, loginForm)
        window.location = './index.html'
    } catch (error) {
        dispatchEvent('userLogged', { type: 'error', message: 'Usuario no registrado'}, loginForm)
    } finally {
       // dispatchEvent('finishLogin', null, loginForm)
    }
}

const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm)
    const email = formData.get("email")
    const password = formData.get("password")
    return {
        email,
        password
    }
}

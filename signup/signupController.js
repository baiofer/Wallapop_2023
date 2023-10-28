import { createUser } from "./signupModel.js"
import { dispatchEvent } from "../utils/dispatchEvent.js"


export const signupController = (signupForm) => {
    //añadir escuchador al formulario para saber cuando se rellena
    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        // Extraer datos del formulario
        const email = signupForm.querySelector('#email')
        const password = signupForm.querySelector('#password')
        const passwordConfirmation = signupForm.querySelector('#password-confirm')
        
        try {
            //dispatchEvent('startSignup', null, signupForm)
            if (isFormValid(email, password, passwordConfirmation)) {
                await createUser(email.value, password.value)
                const data = {
                    type: 'success',
                    message: 'Usuario creado correctamente'
                }
                dispatchEvent('userCreated', data, signupForm)
                window.location = './login.html'
            }
        } catch (error) {
                const data = {
                    type: 'error',
                    message: (error === 'Username is taken' ? 'Usuario ya registrado' : error)
                }
                dispatchEvent('userCreated', data, signupForm)
        } finally {
            //dispatchEvent('finishSignup', null, signupForm)
        }
    })

}

const isFormValid = (email, password, passwordConfirmation) => {
    const emailValidation = isEmailValid(email)
    const passwordValidation = isPasswordValid(password, passwordConfirmation)
    return  emailValidation && passwordValidation
}

const isEmailValid = (email) => {
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    let result = true
    if (!emailRegExp.test(email.value)) {
        throw 'El email no es correcto'
    }
    return result
}

const isPasswordValid = (password, passwordConfirmation) => {
    let result = true
    if (password.value !== passwordConfirmation.value) {
        throw 'Las contraseñas no son iguales'
    }
    return result
}

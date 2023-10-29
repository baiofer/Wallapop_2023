export const buildUnauthorizedSession = () => {
    return `
        <ul>
            <li>
                <a href="./login.html">Acceso</a>
            </li>
            <li>
                <a href="./signup.html">Registro</a>
            </li>
        </ul>
    `
}

export const buildAuthenticatedSession = () => {
    return `<button id="logoutButton">Cerrar sesión</button>
            <button id="createProductButton">Crear producto</button>
    `
}
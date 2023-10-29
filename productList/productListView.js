export const buildProduct = (product) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('product')
    newDiv.innerHTML = `
        <a href="../productDetail.html?id=${product.id}">
            <img src="${product.image ? product.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png"}" atl="Imagen del producto"/>
            <div>
                <h3>${product.name}</h3>
                <h4>Precio: ${product.price}€</h4>
                <p>Tipo: ${product.sale === 'Venta' ? 'Venta' : 'Compra'}</p>
                <p>Categoria: ${product.tags[0]}</p>
            </div>
        </a>
    ` 
    return newDiv 
}

export const emptyProducts = () => {
    return '<h3>No hay productos disponibles, disculpa las molestias</h3>'
}
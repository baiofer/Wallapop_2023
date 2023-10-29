export const buildProductDetail = (product) => {
    return`
        <div class="productDetail">
            <img src="${product.image ? product.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png"}" atl="Imagen del producto"/>
            <div>
                <h2>${product.name}</h3>
                <h4>Precio: ${product.price}€</h4>
                <p class="title">Tipo: </p>
                <p class="type">${product.sale === 'Venta' ? 'Venta' : 'Compra'}</p>
                <p class="title">Categorias: </p>
                <p class="tags">${product.tags.join(', ')}</p>
                <p class="title">Descripción:</p>
                <p class="description">${product.description}</p>
            </div>
        </div>
    ` 
}
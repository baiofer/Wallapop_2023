export const buildProduct = (product) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('product')
    newDiv.innerHTML = `
        <h3>${product.name}</h3>
        <h4>Precio: ${product.price}€</h4>
        <p>Tipo: ${product.sale ? 'venta' : 'compra'}</p>
        <p>Categoria: ${product.tags[0]}</p>
    ` 
    return newDiv 
}
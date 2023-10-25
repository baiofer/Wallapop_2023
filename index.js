const products = [
    { 
        name: "Máquina de escribir", 
        sale: true, 
        price: 125, 
        image: "maquina_escribir.jpeg", 
        tags: ["work"] 
    },
    { 
        name: "Máquina de fotos instantánea", 
        sale: true, 
        price: 95, 
        image: "maquina_fotos.jpeg", 
        tags: ["work"] 
    },
    { 
        name: "Medidor de tensión portátil", 
        sale: true, 
        price: 150, 
        image: "medidor_tensión.jpeg", 
        tags: ["lifestyle"] 
    },
    { 
        name: "Motocicleta", 
        sale: true, 
        price: 3500,
        image: "moto.jpeg", 
        tags: ["motor"] 
    },
    { 
        name: "Reloj de cocina", 
        sale: true, 
        price: 30, 
        image: "reloj_de_pared.jpeg", 
        tags: ["lifestyle"]
    },
    { 
        name: "Silla", 
        sale: true, 
        price: 275, 
        image: "silla.jpeg", 
        tags: ["lifestyle"] 
    },
    { 
        name: "iPhone 12", 
        sale: false, 
        price: 550, 
        tags: ["mobile"] 
    },
    { 
        name: "iWatch", 
        sale: false, 
        price: 225, 
        tags: ["mobile"] 
    }
]

const buildProduct = (product) => {
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

products.forEach( product => {
    const newProduct = buildProduct(product)
    const target = document.querySelector('#products')
    target.appendChild(newProduct)
})

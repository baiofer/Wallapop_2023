import { buildProduct } from "./productListView.js"
import { getProducts } from "./productListModel.js"
import { dispatchEvent } from "../utils/dispatchEvent.js"


export const productListController = async (productList) => {
    productList.innerHTML = ''
    let products
    products = await getProducts()
    dispatchEvent('productsLoaded', { type: "success", message: "Se han cargado los productos." }, productList)
    renderProducts(products, productList)
}

const renderProducts = (products, productList) => {
    products.forEach( product => {
        const newProduct = buildProduct(product)
        productList.appendChild(newProduct)
    })
}

/*
import { buildTweet, emptyTweets } from './tweetListView.js'
import { getTweets } from './tweetListModel.js'
import { dispatchEvent } from "../utils/dispatchEvent.js"

export const tweetListController = async (tweetList) => {
    tweetList.innerHTML = ''
    let tweets = []
    try {
        dispatchEvent('startLoadingTweets', null, tweetList)
        tweets = await getTweets()
    } catch (error) {
        dispatchEvent('tweetsLoaded', {
            type: 'error',
            message: 'Error al cargar los tweets'
        }, tweetList)
    } finally {
        dispatchEvent('finishLoadingTweets', null, tweetList)
    }
    
    // 2.1 Crear estructura de html con los datos del tweet
    
    if (tweets.length === 0) {
        tweetList.innerHTML = emptyTweets()
    } else {
        
        renderTweets(tweets, tweetList)
        dispatchEvent('tweetsLoaded', {
            type: 'success',
            message: 'Tweets cargados correctamente'
        }, tweetList)
    }
    
}

const renderTweets = (tweets, tweetList) => {
    tweets.forEach( tweet => {
        const newTweet = document.createElement('div')
        newTweet.classList.add('tweet')
        newTweet.innerHTML = buildTweet(tweet)
        // 2.2 Añado tweet al DOM
        tweetList.appendChild(newTweet)
    })
}

const createCustomEvent = (type, message) => {
    const event = new CustomEvent('tweetsLoaded', {
        detail: {
            type: type,
            message: message
        }
    })
    return event
}
*/
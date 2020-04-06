/**
 * Mocking client-server processing
 */
const _products = [
    { "id": 1, "title": "Apples", "price": 500, "inventory": 2 },
    { "id": 2, "title": "Boys", "price": 1000, "inventory": 10 },
    { "id": 3, "title": "Cats", "price": 1999, "inventory": 5 },
    { "id": 4, "title": "Dogs", "price": 20000, "inventory": 20 },
    { "id": 5, "title": "Elephants", "price": 200, "inventory": 150 },
    { "id": 6, "title": "Flowers", "price": 840, "inventory": 2 },
    { "id": 7, "title": "Gels", "price": 29485, "inventory": 10 },
    { "id": 8, "title": "Hyenas", "price": 4758, "inventory": 0 },
    { "id": 9, "title": "Jugs", "price": 5390, "inventory": 20 },
    { "id": 10, "title": "Kettles", "price": 223440, "inventory": 0 }
]

export default {
    getProducts(cb) {
        setTimeout(() => cb(_products), 1000)
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}
/**
 * Mocking client-server processing
 */
const _products = [
    { "id": 1, "title": "Mani and Pedi Kit", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "Denim shirt", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "Sneakers", "price": 19.99, "inventory": 5 },
    { "id": 4, "title": "Watches", "price": 200, "inventory": 20 },
    { "id": 5, "title": "China Plates", "price": 20.00, "inventory": 15 }

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
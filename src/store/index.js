
import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'


Vue.use(Vuex)

export default new Vuex.Store({
    state: { //similar to data
        products: [],
        cart: []
    },
    getters: { //similar to computed properties
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)
        },
        cartProducts(state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        }
    },

    /*  
            ** Actions are resposible for firing Mutations
           //similar to methods 
    */
    actions: {
        fetchProducts({ commit }) {
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    commit("setProducts", products)
                    resolve()
                })
            })
        },

        /*
            **context is first parameter of actions
           ** does same thing as the store object
        */
        addProductToCart(context, product) {
            if (product.inventory > 0) {
                const cartItem = context.state.cart.find(item => item.id === product.id)
                if (!cartItem) {
                    //commit a mutation to add product to cart
                    context.commit('pushProductToCart', product.id)
                }
            } else {
                //commit a mutation to increment item in the cart when the item already exists in the cart
                context.commit('incrementItemQuantity', cartItem)
            }
            //commit a mutation that will decrement the products inventory in our shop
            context.commit('decrementProductInventory', product)
        }
    },

    /***
     *  */ //for setting and updating the state ***/

    mutations: {
        setProducts(state, products) {
            //update products
            state.products = products
        },

        pushProductToCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },

        decrementProductInventory(state, product) {
            product.inventory--
        }
    }
})
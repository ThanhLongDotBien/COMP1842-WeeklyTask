//Ngo Quoc Cuong
const app = Vue.createApp({
    data() {
        //exercise
        return {
            cart: [],
            premium: true
        }
        //exercise
    },
    methods: {
        //exercise
        updateCart(id) {
            this.cart.push(id)
        },
        //exercise
        //challenge
        removeById(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        }
        //challenge
    }
})
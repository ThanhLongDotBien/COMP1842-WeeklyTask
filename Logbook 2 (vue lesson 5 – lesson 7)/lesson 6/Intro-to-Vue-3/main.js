const app = Vue.createApp({  //Ngo Quoc Cuong
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },

    //exercise
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },

        //challenge
        deleteCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            } 
        },
        //challenge
    }
    //exercise
})
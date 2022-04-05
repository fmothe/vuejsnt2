const app = Vue.createApp({
    data() {
        return {
            message: "hola vue",
            color: "blue",
            count: 0,
        };
    },
    methods: {
        increment: function () {
            return this.count++;
        },
        decrement: function () {
            return this.count--;
        }
    },
}).mount("#app");

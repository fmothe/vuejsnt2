const app = Vue.createApp({
    data() {
        return {
            message: "hola vue",
            color: "blue",
            count: 0,
        };
    },
    methods: {
        increment() {
            return this.count++;
        },
        decrement() {
            return this.count--;
        },
    },
}).mount("#app");

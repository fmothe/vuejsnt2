const app = Vue.createApp({
    data() {
        return {
            title: "Facturador",
            items: [],
            backgroundColor: "red",
            item: { id: "", descripcion: "", cantidad: "", precio: "" },
        };
    },
    methods: {
        addItem() {
            this.items.push({
                id: this.item.id,
                descripcion: this.item.descripcion,
                cantidad: this.item.cantidad,
                precio: this.item.precio,
            });
            this.item = {
                id: "",
                descripcion: "",
                cantidad: "",
                precio: "",
            };
        },
        sorting() {
            this.items.sort((a, b) =>
                a.descripcion.localeCompare(b.descripcion)
            );
        },
        changeColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            this.backgroundColor = color;
        },
        printInConsole() {
            console.log(JSON.stringify(this.items));
        },
    },
}).mount("#app");

<script>
import Footer from "./Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      author: "Data",
      listaLibros: [
        { id: 1, descripcion: "" },
        { id: 2, descripcion: "" },
        { id: 3, descripcion: "" },
      ],
      libro: {
        id: 0,
        descripcion: "",
      },
    };
  },
};
</script>
<template>
  <div>
    <h1>Cabecera</h1>
    <Footer :author="author" />
  </div>
</template>
<style></style>

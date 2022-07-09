<template>
  <div id="app">
    <header-view></header-view>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";

export default {
  components: {
    HeaderView,
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

img{
  max-width: 100%;
}

a.router-link-exact-active {
  color: #4b8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter{
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active{
  transition: all .3s;
}

.conteudo{
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

@media screen and(max-width: 400px) {
  .conteudo{
    display: block;
  }
}
  

</style>

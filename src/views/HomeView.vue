<template>
  <div>
    <div v-if="loading">
      <page-loading></page-loading>
    </div>

    <transition>
      <div v-if="api" class="conteudo">
    <div>
              <h1>Sobre a {{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
        <router-link tag="button" class="btn-cursos" to="/cursos">Cursos</router-link>
       <div>
        <h2>Avaliações</h2>
        <ul>
          <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
            <p>{{avaliacao.nome}}</p>
            <p>{{avaliacao.descricao}}</p>
          </li>
          </ul>
       </div>
    </div>

      <img src="../assets/aprender.png" alt="Aprender">

      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData.js";
export default {
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style >



.btn-cursos{
  background-color: #4b8;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>

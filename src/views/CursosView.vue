<template>
  <div>
    <div v-if="loading">
      <page-loading></page-loading>
    </div>
    <transition>
    <div v-if="api" >
    <div>
      <h1>{{api.titulo}}</h1>
      <p>{{ api.descricao }}</p>
      <ul>
        <li v-for="curso in api.cursos" :key="curso.id">
        <h2>
          <router-link  :to="{name: 'cursoView', params: {cursoView: curso.id} }">
          {{curso.nome}} - {{curso.totalAulas}} aulas |{{curso.horas}} horas
          </router-link>
          </h2>
        <p>{{curso.descricao}}</p>  
      </li>
      </ul>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
("../mixins/fetchData.js");

export default {
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style></style>

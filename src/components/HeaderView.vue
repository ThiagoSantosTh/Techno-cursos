<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>

      <ul>
        <li><router-link to="/cursos">Cursos</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style scoped>
header {
  background: #234;
}

header a {
  color: #fff;
}

a.router-link-exact-active {
  color: #4b8;
}

nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: space-between;
  padding: 20px;
}

.logo {
  flex: 1;
}

.logo a {
  font-size: 1.2rem;
  color: #fff;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0px 20px;
  margin-left: 10px;
}
</style>
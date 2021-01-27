<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Результаты</router-link> |
      <router-link to="/form">Заполнение формы</router-link>
    </div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
    <SnackbarComponent></SnackbarComponent>
  </div>
</template>

<script>
import SnackbarComponent from './components/SnackbarComponent'

export default {
  components: {
    SnackbarComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.row {
  justify-content: center;
}
</style>

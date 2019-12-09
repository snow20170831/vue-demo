<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import mixinsUser from './mixins/user.js'

export default {
  name: 'App',
  mixins: [mixinsUser],
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      test: '123'
    }
  },
  mounted () {
    console.log('app', this)
  },
  methods: {
    appTest () {
      console.log('appTest')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <i-button size="large" @on-click="handClick">大按钮</i-button>
    <i-button disabled></i-button>
    <i-button id="btn1" class="btn-submit" @click.native="handClick">
      <i-icon slot="icon" type="checkmark"></i-icon>按钮1
    </i-button>{{ app.test }}
  </div>
</template>

<script>
import IIcon from './i-icon'
import IButton from './i-button'

export default {
  name: 'HelloWorld',
  inject: ['app'],
  components: {
    IButton,
    IIcon
  },
  methods: {
    handClick (event) {
      console.log(event)
    }
  },
  mounted () {
    console.log(this.app)
    this.app.appTest()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

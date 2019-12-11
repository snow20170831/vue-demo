<template>
  <div>
    组件a
    <component-b></component-b>
  </div>
</template>

<script>
import { findComponentDownward } from '../utils/assist.js'
import ComponentB from './component-b'

export default {
  name: 'componentA',
  components: {
    ComponentB
  },
  data () {
    return {
      test: 'Hello World !!!'
    }
  },
  mounted () {
    const comB = findComponentDownward(this, 'componentB')
    if (comB) {
      comB.sayHello()
    }
  },
  methods: {
    getName () {
      console.log(this.$options.name, 'hi')
    }
  }
}
</script>

<style>

</style>

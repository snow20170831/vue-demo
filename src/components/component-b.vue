<template>
  <div>组件b</div>
</template>

<script>
import { findComponentUpward, findBrothersComponents } from '../utils/assist.js'

export default {
  name: 'componentB',
  mounted () {
    const comA = findComponentUpward(this, 'componentA')
    if (comA) {
      console.log(comA.test, comA)
      comA.getName()
    }
    const comB = findBrothersComponents(this, 'componentB', false)
    console.log('comB', comB)
  },
  methods: {
    sayHello () {
      console.log('Hello World !')
    }
  }
}
</script>

<style>

</style>

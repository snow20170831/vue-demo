import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/views/form.vue'
import ComponentA from '@/components/component-a.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/test',
      name: 'test',
      component: ComponentA
    }
  ]
})

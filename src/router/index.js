import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowButton from '@/components/ShowButton'
import ShowDialog from '@/components/ShowDialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/showButton',
      name: 'ShowButton',
      component: ShowButton
    },
    {
      path: '/showDialog',
      name: 'ShowDialog',
      component: ShowDialog
    }

  ]
})

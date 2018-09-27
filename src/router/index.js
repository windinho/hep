import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Contact from '@/components/Contact'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact-form',
      name: 'contact',
      component: Contact
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})

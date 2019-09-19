import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/components/Index";
import Login from "@/components/Login";
import Home from "@/components/Home";
import LibraryIndex from '@/components/library/LibraryIndex'
import Books from "@/components/library/Books";
import SideMenu from "@/components/library/SideMenu";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
  name: 'Home',
  component: Home,
  children: [
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          children: [
            {
              path: '/books',
              name: 'Books',
              component: Books,
            },
            {
              path: '/sideMenu',
              name: 'SideMenu',
              component: SideMenu,
            }
          ]
        }
      ]
    }
  ]
})

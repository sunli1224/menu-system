import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);//使用以下路由组件
//引入一级路由
import home from './components/home'
import dishes from './components/dishes/dishes'
import order from './components/order'
import manage from './components/manage'
import about from './components/about/about'
import login from './components/login'
import register from './components/register'

//引入二级路由
import intro from './components/about/intro'
import join from './components/about/join'
import  contact from './components/about/contact'
import hotdisehs from './components/dishes/hotdishes'
import colddishes from './components/dishes/colddishes'
import soup from './components/dishes/soup'
import drink from './components/dishes/drink'
import otherdishes from './components/dishes/otherdishes'

//引入三级路由
import wechat from './components/about/contact/wechat'
import  qq from './components/about/contact/qq'

export default new Router({
  mode: 'history',
  linkActiveClass: 'activate',
  routes: [
    {
      path:"/register",
      component:register
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/dishes',
      name: 'dish',
      component: dishes,
        redirect:"/dishes/hotdishes",
        children:[
            {
                path: "/dishes/hotdishes",
                component:hotdisehs
            },
            {
                path:"/dishes/colddishes",
                component:colddishes
            },
            {
                path:"/dishes/soup",
                component:soup
            },
            {
                path:"/dishes/drink",
                component:drink
            },
            {
                path:"/dishes/otherdishes",
                component:otherdishes
            }
        ]
    },
    {
      path: "/order",
      component: order
    },
    {
      //路由独享守卫
      path: '/manage',
      component: manage
      // beforeEnter(to,from,next){
      //   alert("登录后才显示");
      //   next("/login");
      // }
    },
    {
      path: '/about',
      component: about,
      redirect: '/about/intro',
      children:[
        {
          path:'/about/intro',
          component:intro
        },
        {
          path:'/about/join',
          component:join,
          redirect: "/about/join/wechat",
          children: [
            {
              path:'/about/join/wechat',
              component:wechat
            },
            {
              path:'/about/join/qq',
              component:qq
            }
          ]

        },
        {
          path:'/about/contact',
          component:contact
        }
      ]
    },
    {
      path: "*",
      redirect: '/home'
    }
  ]
  // mode: 'history',
  // base: process.env.BASE_URL,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //   }
  // ]
})

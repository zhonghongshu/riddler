import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CommonPage from "@/views/Encrypted/CommonPage";
import PrivatePage from "@/views/Encrypted/PrivatePage";
import Guide from "@/views/Guide/Guide"
import Reach from "@/views/Reach/Reach"
import Welcome from "@/views/Welcome/Welcome";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    redirect:'/Welcome',
    meta:{
      title:""
    },
    children:[
      {
        path: 'Common/CommonPage',
        name: 'CommonPage',
        component: CommonPage,
        meta:{
          title:"公有密钥"
        },
      },
      {
        path: 'Private/PrivatePage',
        name: 'PrivatePage',
        component: PrivatePage,
        meta:{
          title:"私有密钥"
        },
      },
      {
        path: '/Reach',
        name: 'Reach',
        component: Reach,
        meta:{
          title:"联系作者"
        },
      },
      {
        path: '/Guide',
        name: 'Guide',
        component: Guide,
        meta:{
          title:"使用指南"
        },
      },
      {
        path: '/Welcome',
        name: 'Welcome',
        component: Welcome,
        meta:{
          title:""
        },
      }
    ],
  },
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = 'Riddler' + to.meta.title;
})

export default router

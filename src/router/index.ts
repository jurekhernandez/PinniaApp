import { createRouter, createWebHistory } from 'vue-router'
import FirstCounterPage from "@/counter/pages/FirstCounterPage.vue";
import CounterSetupPage from "@/counter/pages/CounterSetupPage.vue";
import ClientLayout from "@/clients/layout/ClientLayout.vue";
import ListPage from "@/clients/pages/ListPage.vue";
import ClientPage from "@/clients/pages/ClientPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: 'counter-1',
      component:FirstCounterPage
    },
    {
      path: '/2',
      name: 'counter-2',
      component:CounterSetupPage
    },
    {
      path: '/clients/',
      name: 'clients',
      component:ClientLayout,
      redirect:{name:'list'},
      children:[
        { path:'list', name:'list', component:ListPage },
        { path:'/clients/:id', name:'client-id', component:ClientPage },
      ]
    },
  ]
})

export default router

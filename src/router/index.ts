import { createRouter, createWebHistory } from 'vue-router'
import FirstCounterPage from "@/counter/pages/FirstCounterPage.vue";
import CounterSetupPage from "@/counter/pages/CounterSetupPage.vue";

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
  ]
})

export default router

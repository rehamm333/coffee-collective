import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',        component: () => import('./components/HeroSection.vue') },
    { path: '/menu',    component: () => import('./components/MenuSection.vue') },
    { path: '/about',   component: () => import('./components/AboutPage.vue') },
    { path: '/contact', component: () => import('./components/ContactPage.vue') },
  ],
  scrollBehavior() { return { top: 0 } }
})

createApp(App).use(router).mount('#app')
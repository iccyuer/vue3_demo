import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/composition',
        name: 'Composition',
        component: () => import('../views/Composition.vue')
    },
    {
        path: '/request',
        name: 'Request',
        component: () => import('../views/Request.vue')
    },
    {
        path: '/scoped',
        name: 'Scoped',
        component: () => import('../views/Scoped.vue')
    },
    {
        path: '/mavon_edit',
        name: 'mavon_edit',
        component: () => import('../views/MavonEdit.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

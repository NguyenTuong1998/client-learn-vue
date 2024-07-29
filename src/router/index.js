import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import JobView from '@/views/JobView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/jobs', name: 'listing-job', component: JobsView },
    { path: '/job/:id', name: 'JobView', component: JobView },
    { path: '/:catchAll(.*)', name: 'not-found', component: NotFoundView },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
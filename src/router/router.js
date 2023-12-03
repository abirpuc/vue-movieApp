import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'
const routes = [
    {
        name:'HomePage',
        path:'/',
        component:HomePage
    },
    {
        name:'MovieDetails',
        path:'/movie/:id',
        component:MovieDetails
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;
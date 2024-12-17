import { createRouter, createWebHistory } from "vue-router";
import PageGuaxinim from "@/PageGuaxinim.vue";
import AppContainer from "@/AppContainer.vue";


const routes= [
    {path: '/', redirect: '/login'},
    {path: '/login', component: AppContainer},
    {path: '/guaxinim', component: PageGuaxinim}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/components/HomeView";

const routes = [
    {path: '/', name: '', component: HomeView}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

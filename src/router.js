import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./layouts/BaseLayout.vue"),
        children: [
            {
                path: "",
                name: 'Home',
                component: () => import('./pages/Home.vue')
            }
        ]
    },

    // Catch all route undefined
    {
        path: "/:catchAll(.*)*",
        component: () => import("./pages/Error404.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes
})

export default router
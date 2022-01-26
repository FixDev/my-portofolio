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
            },
            {
                path: "skills",
                name: 'Skills',
                component: () => import('./pages/Skills.vue')
            },
            {
                path: "projects",
                name: 'Projects',
                component: () => import('./pages/Projects.vue')
            },
            {
                path: "blogs",
                name: 'Blogs',
                component: () => import('./pages/Blogs.vue')
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
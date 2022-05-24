import { createRouter, createWebHistory } from "vue-router";
import CosmetologyLCart from "../components/cart/CosmetologyLCart.vue";
import HomeView from "../views/HomeView.vue";
import EducationView from "../views/EducationView.vue";
import ServiceView from "../views/ServiceView.vue";
import WorksView from "../views/WorksView.vue";
import ProductsView from "../views/ProductsView.vue";
import AdminView from "../views/AdminView.vue";

const routes = [
    {
        path: "/cart",
        name: "cart",
        component: CosmetologyLCart,
    },
    {
        path: "/",
        name: "Home",
        meta: { auth: true },
        component: HomeView,
    },
    {
        path: "/education",
        name: "education",
        component: EducationView,
    },
    {
        path: "/products",
        name: "products",
        component: ProductsView,
    },
    {
        path: "/service",
        name: "service",
        component: ServiceView,
    },
    {
        path: "/works",
        name: "works",
        component: WorksView,
    },
    {
        path: "/admin",
        name: "admin",
        component: AdminView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;

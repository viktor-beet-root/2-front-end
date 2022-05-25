import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";

import "material-icons";

import "popper.js";

import LottieAnimation from "lottie-web-vue";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./assets/css/style.scss";

const comsetology = createApp(App).use(store).use(router);
comsetology.use(createVuestic()).use(LottieAnimation).mount("#app");

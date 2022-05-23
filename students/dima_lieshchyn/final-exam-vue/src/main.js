import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { initializeApp } from "firebase/app";

import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";

import "material-icons";

import "popper.js";

import LottieAnimation from "lottie-web-vue";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./assets/css/style.scss";

const firebaseConfig = {
    apiKey: "AIzaSyBxvIWSi67bfPvn8pnFgXj3k-AdpenSl34",
    authDomain: "cosmetologist-10c6d.firebaseapp.com",
    projectId: "cosmetologist-10c6d",
    storageBucket: "cosmetologist-10c6d.appspot.com",
    messagingSenderId: "593432826495",
    appId: "1:593432826495:web:3031708ebeb4a2bf9ee54a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

console.log(initializeApp(firebaseConfig));

const comsetology = createApp(App).use(store).use(router);
comsetology.use(createVuestic()).use(LottieAnimation).mount("#app");

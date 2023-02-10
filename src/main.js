import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/css/simple.min.css";
import "./assets/css/custom.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

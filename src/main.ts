import { createApp } from "vue";
import { createPinia } from "pinia";
import "vfonts/FiraCode.css";
import "./assets/reset.css";
import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

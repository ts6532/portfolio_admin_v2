import { createApp } from "vue"
import { createPinia } from "pinia"
import "vfonts/FiraCode.css"
import "./styles/index.css"
import App from "./App.vue"
import router from "./router"

export const app = createApp(App).use(router).use(createPinia())

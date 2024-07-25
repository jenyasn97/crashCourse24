import { createApp } from "vue";
import "./style.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router).use(Toast).mount("#app");

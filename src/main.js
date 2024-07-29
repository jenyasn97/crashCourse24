import { createApp } from "vue";
import "./style.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { initializeApp } from "firebase/app";

import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyCIeH19go2nApfIcYfVw-UemAeLxMuabrk",
  authDomain: "crashcourse24-153a3.firebaseapp.com",
  projectId: "crashcourse24-153a3",
  storageBucket: "crashcourse24-153a3.appspot.com",
  messagingSenderId: "304893193005",
  appId: "1:304893193005:web:b38c72e16f0bd5699681a4",
};

const app = createApp(App);
initializeApp(firebaseConfig);

app.use(router).use(Toast).mount("#app");

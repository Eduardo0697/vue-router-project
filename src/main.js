import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Declaring it here we avoid to use it in each Vue component
import AppLink from "./components/AppLink";

createApp(App)
  .component("AppLink", AppLink)
  .use(router)
  .mount("#app");

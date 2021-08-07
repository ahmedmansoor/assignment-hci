import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

createApp(App)
  .use(router)
  // .use(router)
  // .use(router)
  .use(SetupCalendar, {})
  // Use the components
  .component("Calendar", Calendar)
  .component("DatePicker", DatePicker)
  .mount("#app");

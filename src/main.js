import App from "./App.svelte";
import "./main.css";

const app = new App({
  target: document.body,
  props: {
    name: "universe"
  }
});

export default app;

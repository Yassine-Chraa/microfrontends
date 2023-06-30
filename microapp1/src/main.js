import { createApp } from "vue";
import App from "./App.vue";

let instance = null;

function render(props = {}) {
  const { container } = props;

  instance = createApp(App);
  instance.mount(container ? container.querySelector("#root") : "#root");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("reactapp1 bootstrap");
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.unmount();
}

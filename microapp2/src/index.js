import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// to start separately
if (!window.__POWERED_BY_QIANKUN__) {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export async function bootstrap() {
  console.log("reactapp2 bootstrap");
}

// mount
export async function mount(props) {
  const { container } = props;
  const rootElement = container
    ? container.querySelector("#root")
    : document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// unmount
export async function unmount(props) {
  const { container } = props;
  const rootElement = container
    ? container.querySelector("#root")
    : document.getElementById("root");
  const root = createRoot(rootElement);
  root.unmount(container);
}

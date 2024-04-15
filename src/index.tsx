import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { MainPage } from "./pages/MainPage/ui/MainPage";
import "./index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);

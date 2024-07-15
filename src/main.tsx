import React from "react";
import ReactDOM from "react-dom/client";

// 样式顺序 初始化样式最前面
// 全局配置初始化 css 文件
import "reset-css";
// 全局样式 为了覆盖业务 UI 组件样式
import "@/assets/styles/global.scss";
// UI 组件样式

// 组件样式

import App from "./App.tsx";
// import Router from "@/router/index.tsx";
import { BrowserRouter } from "react-router-dom";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

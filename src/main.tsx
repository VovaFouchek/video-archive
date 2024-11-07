import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ConfigProvider from "antd/es/config-provider/index";

import { themeConfig } from "./config/themeConfig.ts";
import { NotificationProvider } from "./config/context/NotificationContext.tsx";
import App from "./App.tsx";

import "./main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={themeConfig}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ConfigProvider>
  </StrictMode>
);

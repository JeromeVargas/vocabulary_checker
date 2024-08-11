import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import { AppDataProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <AppDataProvider>
              <App />
            </AppDataProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

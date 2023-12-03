import React from "react";

import ReactDOM from "react-dom/client";
import Star from "./Star.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("masterdiv")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <Star />
    </SnackbarProvider>
  </BrowserRouter>
);

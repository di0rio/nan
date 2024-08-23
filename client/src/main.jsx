import React from "react";
import App from "./App.jsx";

import "./index.css";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PaginaInicial from "./routes/PaginaInicial/PaginaInicial.jsx";
import Error from "./routes/Error/Error.jsx";
import Suporte from "./routes/Suporte/Suporte.jsx";
import Sobre from "./routes/Sobre/Sobre.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <PaginaInicial /> },
      { path: "suporte", element: <Suporte /> },
      { path: "sobre", element: <Sobre /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

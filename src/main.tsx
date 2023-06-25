import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductProvider } from "./services/ProductProvider";

import Home from "./containers/Home";
import "./styles/tailwind.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <Home />
      </ProductProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

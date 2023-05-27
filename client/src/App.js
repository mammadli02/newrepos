import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTER } from "./router/routes";
function App() {
  const routes=createBrowserRouter(ROUTER)
  return (
    <>
    <RouterProvider router={routes} />
    </>
  );
}

export default App;

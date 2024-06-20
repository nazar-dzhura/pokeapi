import React from "react";
import AppRouter from "./router/AppRouter";
import {Providers} from "./providers";

export const App: React.FC = () => {
  return <Providers>
      <AppRouter/>
  </Providers>
}

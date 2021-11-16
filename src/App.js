import React from "react";
import GlobalStyle from "./components/global/globalstyles";

import MainRoutes from "./services/routes";


function App() {
  return (
    <>
      <MainRoutes/>
      <GlobalStyle />
    </>
  );
}

export default App;

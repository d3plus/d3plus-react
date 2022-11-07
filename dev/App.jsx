import React from "react";
import ReactDOM from "react-dom/client";
import {D3plusContext} from "d3plus-react";
import Test from "./Test.jsx";

const globalConfig = {
  title: "Hi Alex!"
};

ReactDOM.createRoot(document.getElementById("viz")).render(
  <React.StrictMode>
    <D3plusContext.Provider value={globalConfig}>
      <Test />
    </D3plusContext.Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/index";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./components/Firebase";
import { VesselProvider } from "./Context";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <VesselProvider>
      <App />
    </VesselProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

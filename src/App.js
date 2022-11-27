import React from 'react'
import { Provider } from "react-redux";
import Messages from "./Pages/Account/Messages/Messages";
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", padding: '1rem', alignItems: "center", justifyContent: "center" }}>
        <Messages />
      </div>
    </Provider>
  );
}

export default App;

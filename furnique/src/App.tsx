import React from "react";
import { Header, Main, Footer } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main className="App__main" />
      <Footer />
    </div>
  );
}

export default App;

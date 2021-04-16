import React from "react";
import "./App.scss";
import { Detail, List, TopBar } from "./components";

function App() {
  return (
    <div className="kliqr-app">
      <TopBar />
      <main>
        <List />
        <Detail />
      </main>
    </div>
  );
}

export default App;

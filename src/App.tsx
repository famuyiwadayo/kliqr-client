import { useQuery } from "@apollo/client";
import React from "react";
import "./App.scss";
import { List, TopBar } from "./components";

function App() {
  return (
    <div className="kliqr-app">
      <TopBar />
      <main>
        <List />
        {/* <Detail /> */}
      </main>
    </div>
  );
}

export default App;

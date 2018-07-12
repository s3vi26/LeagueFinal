import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
// import "./styles/styles.css"
import "./styles.css"
const App = () => (
  <div className = "main-container">
    <Nav />
    <Books />
  </div>
);

export default App;

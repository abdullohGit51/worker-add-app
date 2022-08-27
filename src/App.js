import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Edit from "./Pages/Edit";
import HomePage from "./Pages/HomePage/HomePage";
// import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      {/* <Update /> */}
    </div>
  );
}

export default App;

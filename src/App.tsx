import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { FileBrowser } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<FileBrowser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import ProjectList from "pages/ProjectList";
import Contact from "pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ProjectList" element={<ProjectList />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

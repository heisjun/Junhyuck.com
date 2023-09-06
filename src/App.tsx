import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import ProjectList from "pages/ProjectList";
import Contact from "pages/Contact";
import Mobile from "pages/Mobile";
import Web from "pages/Web";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ProjectList" element={<ProjectList />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Mobile" element={<Mobile />} />
      <Route path="/Web" element={<Web />} />
    </Routes>
  );
}

export default App;

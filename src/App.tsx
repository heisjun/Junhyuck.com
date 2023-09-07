import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import Contact from "pages/Contact";
import Mobile from "pages/Mobile";
import Web from "pages/Web";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Mobile" element={<Mobile />} />
      <Route path="/Web" element={<Web />} />
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
}

export default App;

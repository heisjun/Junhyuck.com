import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// Lazy loading을 위해 기존의 import 방식을 변경
const MainPage = lazy(() => import("./pages/MainPage"));
const Contact = lazy(() => import("./pages/Contact"));
const Mobile = lazy(() => import("./pages/Mobile"));
const Web = lazy(() => import("./pages/Web"));

function App() {
  return (
    // Suspense 컴포넌트를 사용하여 lazy-loaded 컴포넌트들을 감싸기
    // fallback 프로퍼티에는 컴포넌트들이 로드되는 동안 보여줄 UI를 지정
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

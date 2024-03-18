import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SkeletonWeb from "components/SkeletonWeb";
import SkeletonContact from "components/SkeletonContact";
// Lazy loading을 위해 기존의 import 방식을 변경

const Contact = lazy(() => import("./pages/Contact"));
const Mobile = lazy(() => import("./pages/Mobile"));
const Web = lazy(() => import("./pages/Web"));

function App() {
  return (
    // Suspense 컴포넌트를 사용하여 lazy-loaded 컴포넌트들을 감싸기
    // fallback 프로퍼티에는 컴포넌트들이 로드되는 동안 보여줄 UI를 지정

    <Suspense fallback={<SkeletonWeb />}>
      <Routes>
        <Route
          path="/Web"
          element={
            <Suspense fallback={<SkeletonWeb />}>
              <Web />
            </Suspense>
          }
        />
        <Route
          path="/Mobile"
          element={
            <Suspense fallback={<SkeletonWeb />}>
              <Mobile />
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense fallback={<SkeletonContact />}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

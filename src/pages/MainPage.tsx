/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import AboutSecond from "./AboutSecond";

function MainPage() {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

  const fadeInStyles = css`
    animation: ${frameInAnimation} 2s forwards;
  `;

  const fadeOutStyles = css``;

  const decoStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 5em;
    ${isInViewport ? fadeInStyles : fadeOutStyles};
  `;

  const textStyle = css`
    color: white;
    font-size: 5em;
    ${isInViewport ? fadeInStyles : fadeOutStyles};
  `;

  useEffect(() => {
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return (
    <div css={mainContainerStyle}>
      <section css={sectionStyle}>
        <div css={mainBlockStyle}>
          <img css={logoImgStyle} src="images/logo.png" alt="로고" />
          <span css={textStyle}>HELLO :)</span>
          <div css={decoStyle} ref={ref}>
            <h1>I'M KIMJUNHYUCK</h1>
          </div>
          <div
            style={{
              width: 50,
              height: 50,
              color: "white",
              transition: "opacity 0.3s",
            }}
          >
            스크롤
          </div>
        </div>
      </section>
      <About />
      <AboutSecond />
    </div>
  );
}

const mainContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const sectionStyle = css`
  height: 100vh;
  width: 100%;
  background-color: black;
`;
const mainBlockStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
`;
const logoImgStyle = css`
  width: 8rem; /* 원래 32px */
  @media (min-width: 768px) {
    width: 10rem; /* 원래 40px */
  }
  margin-top: calc(18vh);
`;

export default MainPage;

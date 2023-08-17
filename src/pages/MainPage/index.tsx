/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React, { useState } from "react";
import About from "components/About";
import AboutSecond from "components/AboutSecond";
import Lottie from "lottie-react";
import lottieScroll from "assets/image/3aM6pLo3nl.json";
import lottieComputer from "assets/image/animation_lldr6qq9.json";
import useObserver from "hooks/useObserver";
import Header from "components/Layout/Header/Header";

function MainPage() {
  const [isInViewport, setIsInViewport] = useState(false);
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

  const frameFadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;  
  }
`;

  const fadeInStyles = css`
    animation: ${frameInAnimation} 2s forwards;
  `;

  const scrollAnimationStyle = css`
    animation: ${frameFadeInAnimation} 10s forwards;
  `;

  const fadeOutStyles = css``;

  const decoStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 5em;
    font-weight: bold;
    ${isInViewport ? fadeInStyles : fadeOutStyles};
  `;

  const textStyle = css`
    color: white;
    font-size: 5em;
    ${isInViewport ? fadeInStyles : fadeOutStyles};
  `;

  const logoImgStyle = css`
    position: absolute;
    width: 8rem; /* 원래 32px */
    @media (min-width: 768px) {
      width: 30rem; /* 원래 40px */
    }
    right: 20%;
    margin-top: 1vh;
    ${isInViewport ? fadeInStyles : fadeOutStyles};
  `;

  const scrollLottieStyle = css`
    height: 40px;
    width: 40px;
    ${isInViewport ? scrollAnimationStyle : fadeOutStyles};
  `;

  const onIntersectFirstSection: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting ? setIsInViewport(true) : setIsInViewport(false);
  };

  const { setTarget: ref } = useObserver({
    onIntersect: onIntersectFirstSection,
    threshold: 0,
  });

  return (
    <>
      <div css={mainContainerStyle}>
        <section css={sectionStyle}>
          <Header />
          <div css={mainBlockStyle}>
            <div css={logoImgStyle}>
              <Lottie animationData={lottieComputer} />
            </div>
            <span css={textStyle}>HELLO :)</span>
            <div css={decoStyle} ref={ref}>
              I'M KIMJUNHYUCK
            </div>
            <div css={scrollLottieStyle}>
              <Lottie animationData={lottieScroll} />
            </div>
          </div>
        </section>
        <About />
        <AboutSecond />
      </div>
    </>
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
  position: relative;
`;
const mainBlockStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;

export default MainPage;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState } from "react";
import useObserver from "hooks/useObserver";
import { useNavigate } from "react-router-dom";

const AboutSecond = () => {
  const [isSecondSectionSeen, setIsSecondSectionSeen] = useState(false);
  const navigate = useNavigate();

  const onIntersectSecondSection: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting
      ? setIsSecondSectionSeen(true)
      : setIsSecondSectionSeen(false);
  };

  const { setTarget: setTargetSecondSection } = useObserver({
    onIntersect: onIntersectSecondSection,
  });

  const sectionStyle = css`
    height: 250vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `;
  const divContainerStyle = css`
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: 10;
    gap: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const spanStyle = css`
    width: 100%;
    font-size: 4rem;
    text-align: center;
    color: white;
    line-height: 8rem;
    font-weight: bold;
    &.large {
      font-size: 5rem;
      font-weight: bold;
      background-color: white;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      margin-bottom: 9.6rem;
    }
    @media (max-width: 768px) {
      font-size: 10vw;
      line-height: 5rem;
    }
  `;

  const strongStyle = css`
    width: auto;
    font-size: 4rem;
    text-align: center;
    color: black;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 7vw;
    }
  `;

  const divBoxStyle = css`
    height: 100vh;
    width: 100%;
    background-color: black;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const fadeInStyles = css`
    opacity: 1;
  `;

  const fadeOutStyles = css`
    opacity: 0;
  `;

  const combinedStyles = css`
    position: sticky;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    background-color: black;
    width: 100%;
    height: 10vh;
    cursor: pointer;
    ${isSecondSectionSeen ? fadeInStyles : fadeOutStyles};
  `;

  const btnStyle = css`
    background-color: white;
    width: 90%;
    height: 6vh;
    border-radius: 10px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
    padding: 5px;
    :hover {
      background-color: gray;
    }
  `;

  return (
    <>
      <section css={sectionStyle}>
        <div css={divContainerStyle}>
          <span css={spanStyle}>앞으로가 궁굼한</span>
          <div css={strongStyle}>신입개발자 김준혁에 대해</div>
          <span css={[spanStyle, "large"]}>더 알고 싶다면</span>
        </div>
        <div css={divBoxStyle} ref={setTargetSecondSection}></div>
      </section>
      <div css={combinedStyles} onClick={() => navigate("/Web")}>
        <div css={btnStyle}>더 보러가기</div>
      </div>
    </>
  );
};

export default AboutSecond;

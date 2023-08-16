/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState } from "react";
import useObserver from "hooks/useObserver";

const AboutSecond = () => {
  const [isSecondSectionSeen, setIsSecondSectionSeen] = useState(false);

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
    &.large {
      font-size: 5rem;
      font-weight: bold;
      background-color: white;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      margin-bottom: 9.6rem;
      color: var(--PRIMARY);
    }
  `;

  const divBoxStyle = css`
    height: 100vh;
    width: 100%;
    background-color: pink;
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
    transition: all 0.5s;
    ${isSecondSectionSeen ? fadeInStyles : fadeOutStyles};
  `;

  return (
    <>
      <section css={sectionStyle}>
        <div css={divContainerStyle}>
          <span css={spanStyle}>무궁무진한</span>
          <span css={spanStyle}>신입개발자 김준혁에 대해</span>
          <span css={[spanStyle, "large"]}>더 알고 싶다면</span>
        </div>
        <div css={divBoxStyle} ref={setTargetSecondSection}></div>
      </section>

      <div css={combinedStyles}>
        <button>
          <h2>더 보러가기</h2>
        </button>
      </div>
    </>
  );
};

export default AboutSecond;

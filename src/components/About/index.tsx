/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState } from "react";

import MainFirstSectionTimer from "components/MainFirstSectionTimer";
import useObserver from "hooks/useObserver";

const INTRODUCE_TEXT_ARR = [
  {
    id: 0,
    content: " ??? ",
  },
  {
    id: 1,
    content: "프론트엔드",
    imgSrc: "/img1.png",
  },
  {
    id: 2,
    content: "새로운 기술을 배우는 것을 좋아하는",
    imgSrc: "img2.jpeg",
  },
  {
    id: 3,
    content: "커뮤니케이션의 중요성을 아는",
    imgSrc: "img3.png",
  },
  {
    id: 4,
    content: "사용자 친화적인 서비스를 만들고 싶은",
    imgSrc: "https://idol-service.com/img/86.jpg",
  },
  {
    id: 5,
    content: "생산성을 높이는 일을 좋아하는",
    imgSrc: "https://idol-service.com/img/86.jpg",
  },
  {
    id: 6,
    content: "물어볼 줄 아는",
    imgSrc: "https://idol-service.com/img/86.jpg",
  },
  {
    id: 7,
    content: "사용자 친화적인 서비스를 만들고 싶은6",
    imgSrc: "https://idol-service.com/img/86.jpg",
  },
];

const MainFirstSection = () => {
  const [isFirstSectionSeen, setIsFirstSectionSeen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIntersectFirstSection: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting
      ? setIsFirstSectionSeen(true)
      : setIsFirstSectionSeen(false);
  };

  const { setTarget: setTargetFirstSection } = useObserver({
    onIntersect: onIntersectFirstSection,
    threshold: 0.8,
  });

  const sectionStyle = css`
    height: 600vh;
    width: 100%;
    position: relative;
  `;

  const containerStyle = css`
    height: 100vh;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
  `;

  const nameTextStyle = css`
    position: absolute;
    font-weight: bold;
    top: calc(50% - 18px - 74px);
    font-size: 3rem;
    line-height: 2.5rem;
  `;

  const primaryTextStyle = css`
    position: absolute;
    top: calc(50% - 18px + 84px);
    font-size: 3rem;
    font-weight: bold;
  `;

  const mapDivStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const mapImgStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.2;

    &.object-cover {
      object-fit: cover;
    }

    &.md\\:object-top {
      object-position: top;
    }
  `;

  const textBoxStyle = css`
    position: absolute;
    top: calc(50% - 32px);

    padding: 0.5rem 1rem;
    background-color: rgb(246 66 128);
    border-radius: 0.5rem;
  `;

  const textStyle = css`
    font-size: 3.25rem;
    font-weight: bold;
    color: #fff;
  `;

  return (
    <section css={sectionStyle}>
      <div
        css={containerStyle}
        ref={setTargetFirstSection}
        style={{
          opacity: isFirstSectionSeen ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        <span css={nameTextStyle}>저는</span>
        {INTRODUCE_TEXT_ARR.map((item, index) => {
          return (
            <div key={item.id} css={mapDivStyle}>
              {item.imgSrc && (
                <img
                  alt={item.content}
                  src={item.imgSrc}
                  css={mapImgStyle}
                  style={{
                    opacity: currentIndex === index ? 0.2 : 0,
                    transition: "opacity 0.3s",
                  }}
                />
              )}
              <div
                css={textBoxStyle}
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
              >
                <span css={textStyle}>{item.content}</span>
              </div>
            </div>
          );
        })}
        <span css={primaryTextStyle}>개발자 입니다</span>
      </div>
      <div>
        {INTRODUCE_TEXT_ARR.map((item, index) => {
          return (
            <MainFirstSectionTimer
              key={item.id}
              index={index}
              setCurrentIndex={setCurrentIndex}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MainFirstSection;
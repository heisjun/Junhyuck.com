/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "components/Layout/Header/Header";
import { useRef, useState, useEffect } from "react";

const ImgData1: string[] = [];
for (let i = 1; i <= 8; i++) {
  ImgData1.push(`web${i}.png`);
}

const ImgData2: string[] = [];
for (let i = 9; i <= 16; i++) {
  ImgData2.push(`web${i}.png`);
}

function MarqueeText({
  direction,
  imgData,
  isRight,
}: {
  direction: number;
  imgData: string[];
  isRight: boolean;
}) {
  const elementRef = useRef<HTMLParagraphElement | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const marqueeText = () => {
      element.style.transform = `translate3d(${direction * count}px, 0, 0)`;
    };

    const animationFrame = requestAnimationFrame(marqueeText);

    return () => cancelAnimationFrame(animationFrame);
  }, [count, direction]);

  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      scrollDir === "scrolling down"
        ? setCount((prev) => prev + 15)
        : setCount((prev) => prev - 15);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <div ref={elementRef}>
      <div css={srollcoverStyle(isRight)}>
        {imgData.map((item, idx) => {
          return <img src={item} css={imgStyle} />;
        })}
      </div>
    </div>
  );
}

const Mobile = () => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div css={containerStyle}>
      <Header />
      <div>
        <div css={textStyle}>
          React-Native 를 이용해 프로젝트의 전체적인 화면 레이아웃 구성 로그인
          페이지를 구현했고, Restful API를 이용한 백엔드 서버와 비동기 통신
          커뮤니티 페이지 구현했습니다. AWS S3 서버에 사진 업로드 기능 구현
          구조요청 페이지와 Geolocation을 이용하여 현재 위치좌표 불러오는 기능을
          구현했습니다. Unity AR기능 임베딩과 산림청 산정보 공공데이터 API를
          이용하여 산 정보페이지 구현했습니다.
        </div>
      </div>
      <MarqueeText direction={-1} imgData={ImgData1} isRight={true} />
      <div css={introBoxStyle}>
        <div css={introTextStyle}>
          산에 대한 다양한 정보를 제공하고 등산 배지를 모으며 도전 과제를 통해
          성취감을 주고 이용자의 등산 기록을 관리한다.
        </div>
        <div
          css={btnStyle}
          onClick={() =>
            handleOpenNewTab("https://github.com/heisjun/Project_mountain")
          }
        >
          Source Code
        </div>
      </div>
      <MarqueeText direction={1} imgData={ImgData2} isRight={false} />
    </div>
  );
};

const textStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  padding: 10%;
  font-family: "Chosunilbo_myungjo";
  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const introBoxStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  padding: 10%;
  font-family: "Chosunilbo_myungjo";
  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const introTextStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  font-family: "Chosunilbo_myungjo";
  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const btnStyle = css`
  width: auto;
  font-size: 2vw;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-family: "Chosunilbo_myungjo";
  padding: 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;
const containerStyle = css`
  width: 100%;
  overflow-x: hidden;
  background-color: black;
  position: relative;
  color: white;
`;

const srollcoverStyle = (isRight: boolean) => css`
  width: 100vw;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: ${isRight ? `flex-start` : `flex-end`};
  transform: ${isRight ? `rotate(-2deg)` : `rotate(2deg)`};
`;

const imgStyle = css`
  width: 15vw;
  display: flex;
  padding-right: 100px;
  @media (max-width: 768px) {
    width: 130px;
    padding-right: 50px;
  }
`;
export default Mobile;

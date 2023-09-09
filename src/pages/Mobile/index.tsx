/** @jsxImportSource @emotion/react */
import "../../App.css";
import { css } from "@emotion/react";
import Footer from "components/Layout/Footer/Footer";
import Header from "components/Layout/Header/Header";
import { useRef, useState, useEffect } from "react";

const ImgData1: string[] = [];
for (let i = 1; i <= 16; i++) {
  ImgData1.push(`web${i}.png`);
}

const ImgData2: string[] = [];
for (let i = 1; i <= 16; i++) {
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

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("");
  useEffect(() => {
    function handleScroll() {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
      }
      scrollDirection === "down"
        ? setCount((prev) => prev + 20)
        : setCount((prev) => prev - 20);

      setLastScrollTop(currentScrollTop);
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거해야 합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, scrollDirection]);

  return (
    <div ref={elementRef}>
      <div css={srollcoverStyle(isRight)}>
        {imgData.map((item, idx) => {
          return <img src={item} css={imgStyle} key={idx} />;
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
      <div css={TitleBlockStyle}>
        <div css={TitleStyle}>MY</div>
        <div css={TitleStyle}>Application</div>
        <div css={TextStyle}>
          React-Native 를 이용해 프로젝트의 전체적인 화면 레이아웃 구성 로그인
          페이지를 구현했고, Restful API를 이용한 백엔드 서버와 비동기 통신
          커뮤니티 페이지 구현했습니다. AWS S3 서버에 사진 업로드 기능 구현
          구조요청 페이지와 Geolocation을 이용하여 현재 위치좌표 불러오는 기능을
          구현했습니다. Unity AR기능 임베딩과 산림청 산정보 공공데이터 API를
          이용하여 산 정보페이지 구현했습니다.
        </div>
      </div>
      <div>
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
            More View
          </div>
        </div>
        <MarqueeText direction={1} imgData={ImgData2} isRight={false} />
      </div>
      <Footer title="Contact" link="../Contact" />
    </div>
  );
};

const TitleBlockStyle = css`
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: 60vh;
  box-sizing: border-box;
  background-color: black;
  @media (max-width: 1000px) {
    height: auto;
    padding-bottom: 80px;
  }
`;
const TitleStyle = css`
  font-size: 60px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const TextStyle = css`
  line-height: 150%;
  font-family: "Chosunilbo_myungjo";
  margin-top: 40px;
  font-size: 25px;
  @media (max-width: 1000px) {
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
    line-height: 180%;
  }
`;

const introTextStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2vw;
  font-family: "Chosunilbo_myungjo";
  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const btnStyle = css`
  width: auto;
  font-size: 2vw;
  box-sizing: border-box;
  background-color: black;
  color: white;
  font-family: "Chosunilbo_myungjo";
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const containerStyle = css`
  width: 100%;
  overflow-x: hidden;
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

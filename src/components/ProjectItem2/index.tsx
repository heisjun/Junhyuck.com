/** @jsxImportSource @emotion/react */
import "./ProjectItem.css";
import { css } from "@emotion/react";
import TagBtn from "components/TagBtn";

const ProjectItem2 = () => {
  const flipCardStyles = css`
    font-family: "Chosunilbo_myungjo";
    .flip-card {
      background-color: transparent;
      width: 40vw;
      height: 55vw;
      border: 1px solid #f1f1f1;
      perspective: 1000px;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;

      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-front {
      background-color: white;
      color: black;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      border-radius: 10px;
      padding: 10px 20px;
    }

    .flip-card-back {
      background-color: white;
      color: black;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      border-radius: 10px;
      transform: rotateY(180deg);
      padding: 10px 20px;
      box-sizing: border-box;
    }
  `;

  const imgStyle = css`
    background-color: white;
    width: 100%;
    object-fit: cover;
  `;

  const textStyle = css`
    font-size: 1.2vw;
    color: black;
  `;
  const titleStyle = css`
    font-size: 2vw;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    color: #0d6637;
  `;

  return (
    <div css={flipCardStyles}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div css={titleStyle}>산 넘어산</div>
            <img css={imgStyle} src="project2.png" />
            <div
              style={{
                display: "flex",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            >
              <TagBtn>ReactNative</TagBtn>
              <TagBtn>Styled-Components</TagBtn>
            </div>
            <h2>22.03~ 23.07</h2>
            <h3>
              산에 대한 다양한 정보를 제공하고 등산 배지를 모으며 도전 과제를
              통해 성취감을 주고 이용자의 등산 기록을 관리한다. 사용자의 숙련도,
              계절, 교통 등에 따라 알맞은 산을 추천해주기도 한다. 추가적으로
              커뮤니티 등을 통해 자신이 아는 등산 정보를 공유하고 다른 사용자의
              정보를 구체적으로 이용할 수 있도록 한다. 이러한 기능들을 통해 등산
              초보자에게도 더 쉽게 등산에 도전할 수 있게 하며 숙련자에게도 더
              많은 기회가 되도록 한다.
            </h3>
          </div>

          <div className="flip-card-back">
            <span css={textStyle}>
              <h2>📌 수행한 업무</h2>
              <br />
              <div>
                <ul>프로젝트의 전체적인 화면 레이아웃 구성</ul>
                <ul>
                  로그인 페이지 구현
                  <li>Restful API를 이용한 백엔드 서버와 비동기 통신</li>
                </ul>
                <ul>
                  커뮤니티 페이지 구현
                  <li>AWS S3 서버에 사진 업로드 기능 구현</li>
                </ul>
                <ul>
                  구조요청 페이지 구현
                  <li>
                    Geolocation을 이용하여 현재 위치좌표 불러오는 기능 구현
                  </li>
                </ul>
                <ul>Unity AR기능 임베딩</ul>
                <ul>
                  산림청 산정보 공공데이터 API를 이용하여 산 정보페이지 구현
                </ul>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem2;

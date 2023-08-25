/** @jsxImportSource @emotion/react */
import "./ProjectItem.css";
import { css } from "@emotion/react";
import TagBtn from "components/TagBtn";

const ProjectItem = () => {
  const flipCardStyles = css`
    font-family: "Chosunilbo_myungjo";
    .flip-card {
      background-color: transparent;
      width: 40vw;
      height: 800px;
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
            <div css={titleStyle}>Gardner's Club</div>
            <img css={imgStyle} src="project1.png" />
            <div
              style={{
                display: "flex",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            >
              <TagBtn>React</TagBtn>
              <TagBtn>TypeScript</TagBtn>
              <TagBtn>Styled-Components</TagBtn>
            </div>
            <h2>22.08~ 23.04</h2>
            <h3>
              식물 관리 기능을 제공하고 식물 집사님들과 식물팁을 공유하며 소통할
              수 있는 커뮤니티를 제공하는 식물 관리 & 커뮤니티 플랫폼입니다.
            </h3>
          </div>

          <div className="flip-card-back">
            <span css={textStyle}>
              <h2>📌 수행한 업무</h2>
              <br />
              <div>
                <ul>
                  페이지 전체적인 레이아웃 디자인 및 기능 구현
                  <li>동적 웹페이지 구현</li>
                  <li>웹퍼블리싱</li>
                </ul>
                <ul>
                  회원가입/ 로그인 페이지 구현
                  <li>Blocker 기능을 통한 페이지 전환 방지 구현</li>
                  <li>회원가입시 정규표현식을 이용한 유효성 검사</li>
                  <li>API를 이용한 OAuth2.0 로그인 구현</li>
                </ul>
                <ul>
                  식물사전 페이지 구현
                  <li>
                    방대한 식물사전 데이터를 효율적으로 관리하기 위해
                    useInView를 활용하여 무한스크롤 기능 구현
                  </li>
                  <li>쿼리스트링을 조작하여 식물 필터링 구현</li>
                </ul>
                <ul>
                  사진페이지 구현
                  <li>비동기 HTTP 요청과 AWS S3 업로드 기능을 구현</li>
                </ul>
                <ul>
                  커뮤니티 페이지 구현
                  <li> RESTful API를 이용한 백엔드 서버와 비동기 통신</li>
                  <li>
                    자주 사용되는 그리드 화면을 컴포넌트화 하여 재사용성 향상
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

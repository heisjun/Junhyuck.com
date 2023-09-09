/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "components/Layout/Footer/Footer";
import Header from "components/Layout/Header/Header";
import WebInfoComponent from "components/WebInfoComponent";

const ProjectList = [
  {
    title: "Gardner's Club",
    info: "고려대학교 창업경진대회 GRNR팀에서 프론트엔드 개발파트로 약 8개월간 프로젝트를 수행 하였습니다. 사전 에러를 방지하고 개발 생산성을 높이기 위해 TypeScript를 이용하여 개발하였습니다. 백엔드파트와 수많은 api를 효율적으로 관리하고 RESTful 한 웹 서비스를 디자인, 설계, 문서화를 위해 Swagger를 이용하여 관리하였습니다. 디자인파트와는 Zeplin, Figma를 이용해 협업하였습니다. 능률적인 협업을 위해 사전에 클린코드, 커밋컨벤션 규칙을 정하고 프로젝트를 수행하였습니다.",
    link: "https://placid-dragonfly-b6b.notion.site/Gardner-s-Club-e10a62d08e1043b392cb755456e31f7a",
    img: "website1.png",
    skills: ["React", "TypeScript", "Styled-Components", "Recoil"],
  },
  {
    title: "KJH.COM",
    info: "리액트와 타입스크립트를 이용하여 포트폴리오 웹 사이트를 제작했습니다. 인터렉티브한 웹을 만들기위해 MatterJs를 비롯한 다양한 CSS효과들을 이용해 제작했습니다. 미디어 쿼리를 이용하여 모바일뷰과와 웹뷰를 다르게 설정하여 모바일과 웹 둘다 사용가능하게 만들었습니다. ",
    link: "https://placid-dragonfly-b6b.notion.site/KJH-COM-6f81785349c24636929827ade4cb1bf2?pvs=4",
    img: "website2.png",
    skills: ["React", "TypeScript", "Emotion", "MatterJS"],
  },
];

const Web = () => {
  return (
    <div css={containerStyle}>
      <Header />
      <div css={TitleBlockStyle}>
        <div css={TitleStyle}>MY</div>
        <div css={TitleStyle}>WEBSITE</div>

        <div css={TextStyle}>
          지금까지 작업했던 사이트 입니다. 식물 커뮤니티 관련 웹사이트,
          웹포트폴리오 웹사이트 등을 제작하였습니다. 여러명의 사람들과 함께하는
          프로젝트와 개인 프로젝트로 웹사이트를 제작했습니다. 앞으로도 더 새롭고
          다양한 웹사이트를 제작하고 싶습니다.
        </div>
      </div>
      {ProjectList.map((project, idx) => {
        return (
          <div css={ProjectListContainerStyle} key={idx}>
            <div css={ProjectListBox}>
              <WebInfoComponent
                title={project.title}
                info={project.info}
                link={project.link}
                skills={project.skills}
              />
            </div>
            <div css={ProjectListBox}>
              <img src={project.img} css={monitorStyle} />
            </div>
          </div>
        );
      })}
      <Footer title="Mobile" link="../Mobile" />
    </div>
  );
};

const ProjectListContainerStyle = css`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const ProjectListBox = css`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const monitorStyle = css`
  width: 80%;
  height: auto;
  margin-top: 15%;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    margin-top: 10%;
  }
`;

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

const containerStyle = css`
  width: 100%;
  color: white;
`;

export default Web;

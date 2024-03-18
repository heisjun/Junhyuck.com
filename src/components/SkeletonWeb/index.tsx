/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "components/Layout/Header/Header";

const SkeletonWeb = () => {
  return (
    <div css={containerStyle}>
      <Header />
      <div css={TitleBlockStyle}>
        <div css={TitleStyle}></div>
        <div css={TextStyle}></div>
        <div css={TextStyle}></div>
      </div>

      <div css={ProjectListContainerStyle}>
        <div css={ProjectListBox}>
          <div css={ContainerStyle} />
        </div>
        <div css={ProjectListBox}>
          <div css={ContainerStyle} />
        </div>
      </div>
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
  background-color: lightgray;
  height: 60px;
  width: 100px;
`;

const TextStyle = css`
  background-color: lightgray;
  height: 40px;
  width: 80%;
  margin-top: 40px;
`;

const containerStyle = css`
  width: 100%;
  color: white;
`;

const ContainerStyle = css`
  box-sizing: border-box;
  margin: 10%;
  width: 100%;
  height: 300px;
  background-color: lightgray;
  @media (max-width: 1000px) {
    margin: 0px;
  }
`;

export default SkeletonWeb;

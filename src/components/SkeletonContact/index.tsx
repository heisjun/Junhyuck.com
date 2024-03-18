/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "components/Layout/Header/Header";

const SkeletonContact = () => {
  return (
    <div css={containerStyle} className="Canvas">
      <Header />
      <div style={{ position: "absolute" }}>
        <div css={textContainerStyle}>
          <div css={titleStyle} />
          <div css={textStyle} />
          <div css={textStyle} />

          <div style={{ display: "flex" }}>
            <div css={iconStyle} />
            <div css={iconStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};
const containerStyle = css`
  height: 100vh;
  width: 100%;
  background-color: black;
  position: relative;
  color: white;
`;

const textContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

const titleStyle = css`
  background-color: lightgray;
  height: 60px;
  width: 100px;
  margin-bottom: 20px;
`;

const textStyle = css`
  background-color: lightgray;
  height: 60px;
  width: 300px;
  margin-bottom: 20px;
`;

const iconStyle = css`
  width: 5rem;
  height: 5rem;
  background-color: lightgray;
  margin-right: 1rem;
`;
export default SkeletonContact;

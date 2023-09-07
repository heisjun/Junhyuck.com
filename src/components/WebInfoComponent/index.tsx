/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TagBtn from "components/TagBtn";

interface IWebComponent {
  title: string;
  info: string;
  link: string;
  skills: string[];
}

const WebInfoComponent = (props: IWebComponent) => {
  const { title, info, link, skills } = props;
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div css={ContainerStyle}>
      <div css={TitleStyle}>{title}</div>
      <hr />
      <div
        style={{
          display: "flex",
          marginTop: "1vw",
          marginBottom: "1vw",
        }}
      >
        {skills.map((item, idx) => {
          return (
            <div key={idx}>
              <TagBtn>{item}</TagBtn>
            </div>
          );
        })}
      </div>
      <div css={TextStyle}>{info}</div>
      <div css={BtnStyle} onClick={() => handleOpenNewTab(`${link}`)}>
        More View
      </div>
    </div>
  );
};

const BtnStyle = css`
  display: inline;
  background-color: black;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-family: "Chosunilbo_myungjo";
  cursor: pointer;
  :hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const TitleStyle = css`
  font-size: 40px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

const TextStyle = css`
  line-height: 150%;
  font-family: "Chosunilbo_myungjo";
  margin-bottom: 20px;
`;
const ContainerStyle = css`
  box-sizing: border-box;
  padding: 5%;
  margin: 10%;
  background-color: white;
  color: black;
  @media (max-width: 1000px) {
    margin: 0px;
  }
`;

export default WebInfoComponent;

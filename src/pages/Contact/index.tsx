/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "components/Layout/Header/Header";
import { RxGithubLogo, RxNotionLogo } from "react-icons/rx";

const Contact = () => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div css={containerStyle}>
      <Header />
      <div css={textContainerStyle}>
        <div css={textStyle}>Contact</div>
        <div css={textStyle}>+82 010 2303 9598</div>
        <div css={textStyle}>jun146517@gmail.com</div>

        <div>
          <RxNotionLogo
            css={iconStyle}
            onClick={() =>
              handleOpenNewTab(
                "https://placid-dragonfly-b6b.notion.site/265256b1636d4ab69b252f273fdba52a?pvs=4"
              )
            }
          />
          <RxGithubLogo
            css={iconStyle}
            onClick={() => handleOpenNewTab("https://github.com/heisjun")}
          />
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
  padding: 200px;
`;

const textStyle = css`
  font-weight: bold;
  font-size: 2.5rem;
`;

const iconStyle = css`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  color: lightgray;
`;
export default Contact;

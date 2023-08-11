/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div> this is footer</div>
    </footer>
  );
};

const footerStyle = css`
  height: 100px;
  margin-top: auto;
  background-color: aliceblue;
`;

export default Footer;

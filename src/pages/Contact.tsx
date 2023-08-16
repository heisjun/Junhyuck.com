/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Contact = () => {
  return (
    <div css={containerStyle}>
      <h1>"It's MY Contact"</h1>
    </div>
  );
};

const containerStyle = css`
  height: 900px;
  padding-top: 80px;
  background-color: peachpuff;
`;
export default Contact;

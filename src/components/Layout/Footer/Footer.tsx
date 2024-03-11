/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

interface IFooter {
  title: string;
  link: string;
}

const Footer = (props: IFooter) => {
  const { title, link } = props;
  const navigate = useNavigate();
  return (
    <footer css={footerStyle}>
      <button
        aria-label={`${title}보러가기 버튼`}
        css={NextBtn}
        onClick={() => navigate(link)}
      >
        {title} 보러가기
      </button>
    </footer>
  );
};

const footerStyle = css`
  height: 300px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextBtn = css`
  background-color: black;
  border: none;
  color: white;
  font-size: 30px;
  padding: 20px;
  font-family: "Chosunilbo_myungjo";
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export default Footer;

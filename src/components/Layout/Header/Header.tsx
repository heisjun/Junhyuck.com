/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SideBar from "components/SideBar";
const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <div css={headerStyle}>
      <div>
        <h2 css={h2Style} onClick={() => navigate("/")}>
          KJH.COM
        </h2>
      </div>
      <nav>
        <ul css={ulStyle}>
          <li onClick={() => navigate("/")}>About ME</li>
          <li onClick={() => navigate("/Web")}>Web</li>
          <li onClick={() => navigate("/Mobile")}>Mobile</li>
          <li onClick={() => navigate("/Contact")}>Contanct</li>
        </ul>
        <div css={hambugBtnStyle}>
          <RxHamburgerMenu onClick={toggleSide} />
        </div>
      </nav>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const hambugBtnStyle = css`
  display: none;
  color: white;
  @media (max-width: 768px) {
    display: contents;
    font-size: 40px;
  }
`;
const h2Style = css`
  cursor: pointer;
  font-family: "Black Han Sans", sans-serif;
`;
const ulStyle = css`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: end;
  font-family: "Black Han Sans", sans-serif;
  font-size: 2vw;
  list-style-type: none;
  li {
    cursor: pointer;
    -webkit-text-stroke: 1px #f9f7f1;
    background-image: linear-gradient(0deg, #f9f7f1, #f9f7f1);
    -webkit-background-clip: text;
    color: transparent;
    margin-left: 30px;
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: 0% 100%;
    transition: background-size 0.2s ease;
    :hover {
      background-size: 100% 100%;
    }
  }
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0px 40px;
  background-color: black;
`;
export default Header;

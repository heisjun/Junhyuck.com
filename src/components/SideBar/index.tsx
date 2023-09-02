/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

interface ISideBar {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}
const SideBar = (props: ISideBar) => {
  const { isOpen, setIsOpen } = props;
  const navigate = useNavigate();
  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <div id="sidebar" className={isOpen ? "open" : ""} css={SideBarWrap}>
      <div
        style={{
          height: 80,
          paddingRight: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <RxCross1
          onClick={toggleSide}
          onKeyDown={toggleSide}
          style={{ fontSize: 40 }}
        />
      </div>
      <ul css={ulStyle}>
        <li onClick={() => navigate("/")}>About ME</li>
        <li onClick={() => navigate("/ProjectList")}>Project</li>
        <li onClick={() => navigate("/Contact")}>Contanct</li>
      </ul>
    </div>
  );
};

const SideBarWrap = css`
  box-sizing: border-box;
  z-index: 5;
  background-color: black;
  height: 100%;
  width: 100%;
  right: -100%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const ulStyle = css`
  justify-content: end;
  font-family: "Black Han Sans", sans-serif;
  font-size: 40px;
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
    line-height: 150%;
  }
`;

export default SideBar;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IHeader {
  onGocontent: (index: number) => void;
}

const Header = (props: IHeader) => {
  const { onGocontent } = props;
  return (
    <div css={headerStyle}>
      <div>
        <div>JUNHYUCK.COM</div>
      </div>
      <nav css={navStyle}>
        <ul css={ulStyle}>
          <li onClick={() => onGocontent(0)}>About</li>
          <li onClick={() => onGocontent(1)}>Project</li>
          <li onClick={() => onGocontent(2)}>Contanct</li>
        </ul>
      </nav>
    </div>
  );
};

const navStyle = css`
  width: 30%;
`;
const ulStyle = css`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const headerStyle = css`
  position: fixed;
  display: flex;
  justify-content: space-between;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #dde0ea;
`;
export default Header;

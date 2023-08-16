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
        <h2>KJH.COM</h2>
      </div>
      <nav>
        <ul css={ulStyle}>
          <li onClick={() => onGocontent(0)}>About ME</li>
          <li onClick={() => onGocontent(1)}>Project</li>
          <li onClick={() => onGocontent(2)}>Contanct</li>
        </ul>
      </nav>
    </div>
  );
};

const ulStyle = css`
  display: flex;
  justify-content: end;
  cursor: pointer;
  li {
    margin-left: 30px;
  }
`;

const headerStyle = css`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0px 40px;
`;
export default Header;

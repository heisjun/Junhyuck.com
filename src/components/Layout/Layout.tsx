/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface ILayout {
  children: React.ReactNode;
  onGocontent: (index: number) => void;
}

const Layout = (props: ILayout) => {
  const { children, onGocontent } = props;
  return (
    <div css={divStyle}>
      <Header onGocontent={onGocontent} />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};

const divStyle = css`
  margin-top: 80px;
`;

const mainStyle = css`
  min-height: calc(100vh - 180px);
`;
export default Layout;

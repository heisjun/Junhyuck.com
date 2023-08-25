/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout = (props: ILayout) => {
  const { children } = props;
  return (
    <div css={divStyle}>
      <Header />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};

const divStyle = css``;

const mainStyle = css``;
export default Layout;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useRef } from "react";
import Layout from "../components/Layout/Layout";

function MainPage() {
  const contentRef = useRef<null[] | HTMLDivElement[]>([]);
  const onContentClick = (index: number) => {
    contentRef.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Layout onGocontent={onContentClick}>
        <div
          css={contentStyle}
          ref={(element) => {
            contentRef.current[0] = element;
          }}
        >
          content1
        </div>
        <div
          css={contentStyle}
          ref={(element) => {
            contentRef.current[1] = element;
          }}
        >
          content2
        </div>
        <div
          css={contentStyle}
          ref={(element) => {
            contentRef.current[2] = element;
          }}
        >
          content3
        </div>
      </Layout>
    </div>
  );
}

const contentStyle = css`
  height: 900px;
  padding-top: 80px;
`;

export default MainPage;

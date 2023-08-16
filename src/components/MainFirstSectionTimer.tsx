/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

import useObserver from "hooks/useObserver";

interface IFirstTimer {
  setCurrentIndex: (index: number) => void;
  index: number;
}
const MainFirstSectionTimer = (props: IFirstTimer) => {
  const { setCurrentIndex, index } = props;
  const onIntersectFirstSection: IntersectionObserverCallback = ([entry]) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    entry.isIntersecting ? setCurrentIndex(index) : null;
  };

  const { setTarget } = useObserver({
    onIntersect: onIntersectFirstSection,
    threshold: 1,
  });

  const divStyle = css`
    background-color: transparent;
    width: 1px;
    height: 50vh;
  `;

  return (
    <div>
      <div ref={setTarget} css={divStyle}></div>
    </div>
  );
};

export default MainFirstSectionTimer;

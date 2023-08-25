/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ITagBtn {
  children: React.ReactNode;
}

const TagBtn = (props: ITagBtn) => {
  const { children } = props;
  return (
    <div css={ContainerStyle}>
      <div>{children}</div>
    </div>
  );
};

const ContainerStyle = css`
  width: auto;
  height: auto;
  background-color: black;
  color: white;
  border-radius: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vw;
  margin-right: 0.7vw;
  font-size: 1vw;
`;

export default TagBtn;

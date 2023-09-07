/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "components/Layout/Header/Header";
import { RxGithubLogo, RxNotionLogo } from "react-icons/rx";
import React, { useEffect } from "react";
import Matter from "matter-js";

const Contact = () => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  useEffect(() => {
    // Matter.js 엔진 초기화
    const engine = Matter.Engine.create();
    const world = engine.world;

    // 중력 설정
    world.gravity.y = 2; // 중력의 세기를 조절하세요.

    // 캔버스를 추가할 요소 찾기 (className이 'Canvas'인 요소)
    const canvasContainer = document.querySelector(".Canvas") as HTMLElement;

    // 렌더링할 캔버스 생성
    const canvas = document.createElement("canvas");

    // 캔버스 크기 설정
    const canvasWidth = canvasContainer?.offsetWidth;
    const canvasHeight = canvasContainer?.offsetHeight - 88;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvasContainer?.appendChild(canvas);

    // 렌더러 초기화
    const render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        background: "none",
        wireframes: false,
      },
    });

    // Matter.js에서 사용할 도형 생성 및 추가

    const shapes = [];
    // 바닥 추가
    const ground = Matter.Bodies.rectangle(
      canvasWidth / 2,
      canvasHeight + 25,
      canvasWidth,
      50,
      { isStatic: true }
    );
    shapes.push(ground);

    //경계추가
    const boundaryOptions = {
      isStatic: true,
      render: {
        visible: false,
      },
    };

    const leftBoundary = Matter.Bodies.rectangle(
      0,
      canvasHeight / 2,
      1,
      canvasHeight,
      boundaryOptions
    );
    const rightBoundary = Matter.Bodies.rectangle(
      canvasWidth,
      canvasHeight / 2,
      1,
      canvasHeight,
      boundaryOptions
    );
    Matter.World.add(world, [leftBoundary, rightBoundary]);

    const rectangle2 = Matter.Bodies.rectangle(canvasWidth * 0.6, 60, 180, 180);

    shapes.push(rectangle2);

    const rectangle2_1 = Matter.Bodies.rectangle(
      canvasWidth * 0.65,
      -120,
      180,
      180
    );

    shapes.push(rectangle2_1);
    const rectangle2_2 = Matter.Bodies.rectangle(
      canvasWidth * 0.63,
      270,
      180,
      180
    );

    shapes.push(rectangle2_2);

    const rectangle2_3 = Matter.Bodies.rectangle(
      canvasWidth * 0.6,
      500,
      180,
      180
    );

    shapes.push(rectangle2_3);

    const rectangle3 = Matter.Bodies.rectangle(
      (canvasWidth / 4) * 3,
      10,
      180,
      180
    );
    shapes.push(rectangle3);

    const rectangle3_1 = Matter.Bodies.rectangle(
      (canvasWidth / 3.9) * 3,
      -190,
      180,
      180
    );
    shapes.push(rectangle3_1);

    const rectangle3_2 = Matter.Bodies.rectangle(
      (canvasWidth / 4.1) * 3,
      200,
      180,
      180
    );
    shapes.push(rectangle3_2);

    const rectangle3_3 = Matter.Bodies.rectangle(
      (canvasWidth / 4.5) * 3,
      400,
      180,
      180
    );
    shapes.push(rectangle3_3);

    Matter.World.add(world, shapes);

    // 마우스 드래그를 위한 마우스 제어 설정
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
    });
    Matter.World.add(world, mouseConstraint);

    // 애니메이션 루프 시작
    Matter.Runner.run(engine);
    Matter.Render.run(render);

    return () => {
      // 컴포넌트가 언마운트될 때 캔버스 제거
      if (!canvasContainer) return;
      canvasContainer.removeChild(canvas);
    };
  }, []);

  return (
    <div css={containerStyle} className="Canvas">
      <Header />
      <div style={{ position: "absolute" }}>
        <div css={textContainerStyle}>
          <div css={textStyle}>Contact</div>
          <div css={textStyle}>+82 010 2303 9598</div>
          <div css={textStyle}>jun146517@gmail.com</div>

          <div>
            <RxNotionLogo
              css={iconStyle}
              onClick={() =>
                handleOpenNewTab(
                  "https://placid-dragonfly-b6b.notion.site/265256b1636d4ab69b252f273fdba52a?pvs=4"
                )
              }
            />
            <RxGithubLogo
              css={iconStyle}
              onClick={() => handleOpenNewTab("https://github.com/heisjun")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const containerStyle = css`
  height: 100vh;
  width: 100%;
  background-color: black;
  position: relative;
  color: white;
`;

const textContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 100px;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const textStyle = css`
  font-size: 2.5rem;
  line-height: 150%;
  font-family: "Black Han Sans", sans-serif;
  @media (max-width: 768px) {
    font-size: 7vw;
  }
`;

const iconStyle = css`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  color: lightgray;
  padding-right: 1rem;
  padding-top: 1rem;
`;
export default Contact;

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

    const topBoundary = Matter.Bodies.rectangle(
      canvasWidth / 2,
      0,
      canvasWidth,
      1,
      boundaryOptions
    );
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
    Matter.World.add(world, [topBoundary, leftBoundary, rightBoundary]);

    const circle = Matter.Bodies.circle(canvasWidth / 4, canvasHeight / 2, 100);
    shapes.push(circle);

    const rectangle = Matter.Bodies.rectangle(
      (canvasWidth / 4.5) * 2,
      200,
      200,
      200
    );
    shapes.push(rectangle);

    const rectangle1 = Matter.Bodies.rectangle(
      (canvasWidth / 4) * 2,
      0,
      200,
      200
    );
    shapes.push(rectangle1);
    const rectangle2 = Matter.Bodies.rectangle(
      (canvasWidth / 4.5) * 3,
      200,
      200,
      200
    );
    shapes.push(rectangle2);
    const rectangle4 = Matter.Bodies.rectangle(
      (canvasWidth / 4.5) * 4,
      200,
      200,
      200
    );
    shapes.push(rectangle4);

    const rectangle5 = Matter.Bodies.rectangle(
      (canvasWidth / 4.2) * 4,
      50,
      200,
      200
    );
    shapes.push(rectangle5);

    const rectangle6 = Matter.Bodies.rectangle(
      (canvasWidth / 4) * 3,
      30,
      200,
      200
    );
    shapes.push(rectangle6);

    const trapezoid = Matter.Bodies.trapezoid(
      canvasWidth / 4,
      canvasHeight / 2,
      180,
      180,
      0.5
    ); // 사다리꼴
    shapes.push(trapezoid);

    const pentagon = Matter.Bodies.polygon(
      (canvasWidth / 4) * 5,
      canvasHeight / 2,
      100,
      50,
      {
        render: { fillStyle: "#FF5733" }, // 색상 변경
      }
    );
    shapes.push(pentagon);

    Matter.World.add(world, shapes);

    // 마우스 드래그를 위한 마우스 제어 설정
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
    });
    Matter.World.add(world, mouseConstraint);

    // 애니메이션 루프 시작
    Matter.Engine.run(engine);
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
  padding: 200px;
`;

const textStyle = css`
  font-weight: bold;
  font-size: 2.5rem;
`;

const iconStyle = css`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  color: lightgray;
`;
export default Contact;

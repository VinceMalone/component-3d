import * as React from "react";
import styled from "styled-components";

import { useSetting } from "./Settings";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  user-select: none;
`;

const Movable = styled.div`
  transform-style: preserve-3d;

  * {
    transform-style: preserve-3d;
  }
`;

export function Mover({
  children,
  initialScale = 1,
  initialX = 0,
  initialY = 0
}) {
  const [elevated] = useSetting("elevated");

  const containerRef = React.useRef(null);
  const movableRef = React.useRef(null);
  const xyRef = React.useRef([initialX, initialY]);
  const scaleRef = React.useRef(initialScale);

  const getTransform = React.useCallback(() => {
    const [x, y] = xyRef.current;
    const scale = scaleRef.current;
    return `rotateX(${y}deg) rotateY(${x}deg) scale(${scale})`;
  }, []);

  const setTransform = React.useCallback(() => {
    const movable = movableRef.current;
    if (movable != null) {
      movable.style.transform = getTransform();
    }
  }, [getTransform]);

  React.useEffect(() => {
    xyRef.current = elevated ? [initialX, initialY] : [0, 0];
    scaleRef.current = elevated ? initialScale : 1;

    const container = containerRef.current;
    const movable = movableRef.current;

    movable
      .animate([{ transform: getTransform() }], {
        duration: 500,
        easing: "ease-out"
      })
      .finished.then(() => setTransform());

    if (!elevated) {
      return;
    }

    let isDown = false;

    function handleDown(event) {
      if (containerRef.current == null) {
        return;
      }

      isDown = true;

      // const elRect = elementRef.current.getBoundingClientRect();

      // isDown =
      //   event.x >= elRect.x &&
      //   event.x <= elRect.x + elRect.width &&
      //   event.y >= elRect.y &&
      //   event.y <= elRect.y + elRect.height;
    }

    function handleUp() {
      isDown = false;
    }

    function handleMove(event) {
      if (containerRef.current == null || !isDown) {
        return;
      }

      const factor = 0.125;
      let [x, y] = xyRef.current;
      x += event.movementX * factor;
      y -= event.movementY * factor;

      xyRef.current = [x, y];
      setTransform();
    }

    function handleWheel(event) {
      if (containerRef.current == null) {
        return;
      }

      const factor = 0.00075;
      let scale = scaleRef.current;
      scale -= event.wheelDelta * factor;
      scale = Math.min(Math.max(scale, 0.1), 10);
      scaleRef.current = scale;
      setTransform();
    }

    container.addEventListener("pointerdown", handleDown, true);
    container.addEventListener("pointerup", handleUp, true);
    container.addEventListener("pointermove", handleMove, true);
    container.addEventListener("wheel", handleWheel, true);

    return () => {
      if (container == null) {
        return;
      }

      container.removeEventListener("pointerdown", handleDown, true);
      container.removeEventListener("pointerup", handleUp, true);
      container.removeEventListener("pointermove", handleMove, true);
      container.removeEventListener("wheel", handleWheel, true);
    };
  }, [elevated, getTransform, initialScale, initialX, initialY, setTransform]);

  return (
    <Container ref={containerRef}>
      <Movable ref={movableRef}>{children}</Movable>
    </Container>
  );
}

import React from "react";
import styled, { css } from "styled-components";

import { useSettings } from "./Settings";

const Context = React.createContext(0);

const flat = css`
  box-shadow: none;
  transform: none;
`;

const Label = styled.div`
  background-color: rgba(0 0 0 / 0.4);
  border-radius: 4px;
  bottom: 100%;
  color: white;
  font-family: sans-serif;
  font-size: 0.5rem;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  padding: 0.125em 0.375em;
  position: absolute;
  transition: opacity 0.25s ease-out;
`;

function calcShadow(props) {
  if (!props.showShadow) {
    return "none";
  }

  const divisor = props.level + 1;
  const offset = 16 / divisor;
  return `-${offset}px ${offset}px ${32 / divisor}px rgba(0 0 0 / 0.2)`;
}

const Container = styled.div`
  background-color: white;
  box-shadow: ${calcShadow};
  outline: 1px solid transparent;
  outline-color: ${(props) => (props.showOutline ? "red" : "transparent")};
  position: relative;
  margin: ${(props) => `${props.explodeX}rem`};
  transform: translateZ(${(props) => `${props.explodeZ}rem`});
  transform-style: preserve-3d;
  transition-property: box-shadow, margin, opacity, outline-color, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  ${(props) => (props.elevated ? "" : flat)}
`;

export function Elevation({ children, label }) {
  const level = React.useContext(Context);
  const [settings] = useSettings();
  const {
    elevated,
    elevation,
    explodeX,
    explodeZ,
    showLabels,
    showOutlines,
    showShadows
  } = settings;

  const isVisible = elevation === "" || level === Number(elevation);

  return (
    <Container
      elevated={elevated}
      explodeX={elevated ? explodeX : 0}
      explodeZ={explodeZ}
      visible={isVisible}
      level={level}
      showOutline={elevated && showOutlines}
      showShadow={elevated && showShadows}
    >
      <Label visible={elevated && showLabels}>{label}</Label>
      <Context.Provider value={level + 1}>{children}</Context.Provider>
    </Container>
  );
}

export function withElevation(Component, name) {
  const label =
    name ?? (Component.displayName || Component.name || "Anonymous");

  return (props) => (
    <Elevation label={label}>
      <Component {...props} />
    </Elevation>
  );
}

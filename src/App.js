import React from "react";
import styled from "styled-components";

import { Mover } from "./Mover";
import { SettingsProvider, useSetting } from "./Settings";
import "./styles.css";
import { TweetScreen } from "./Tweet";

const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr max-content;
  height: 100vh;
  padding: 1rem;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InlineLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  font-family: monospace;
  font-size: larger;
`;

function ElevatedSettingsContainer({ children }) {
  const [elevated] = useSetting("elevated");

  return (
    <Settings
      style={{
        opacity: elevated ? "1" : "0",
        pointerEvents: elevated ? "auto" : "none",
        transition: "opacity 0.2s ease-out"
      }}
    >
      {children}
    </Settings>
  );
}

const ToggleButton = styled.button`
  background-color: rgb(29, 161, 242);
  border: none;
  border-radius: 9999px;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  height: 2.5rem;
`;

function ElevatedSetting() {
  const [elevated, setElevated] = useSetting("elevated");

  return (
    <ToggleButton onClick={() => setElevated(!elevated)}>
      {elevated ? "Flatten..." : "Elevate!"}
    </ToggleButton>
  );
}

function ShowLabelsSetting() {
  const [showLabels, setShowLabels] = useSetting("showLabels");

  return (
    <InlineLabel>
      <input
        checked={showLabels}
        onChange={(event) => setShowLabels(event.target.checked)}
        type="checkbox"
      />
      Show Labels
    </InlineLabel>
  );
}

function ShowShadowsSetting() {
  const [showShadows, setShowShadows] = useSetting("showShadows");

  return (
    <InlineLabel>
      <input
        checked={showShadows}
        onChange={(event) => setShowShadows(event.target.checked)}
        type="checkbox"
      />
      Show Shadows
    </InlineLabel>
  );
}

function ShowOutlinesSetting() {
  const [showOutlines, setShowOutlines] = useSetting("showOutlines");

  return (
    <InlineLabel>
      <input
        checked={showOutlines}
        onChange={(event) => setShowOutlines(event.target.checked)}
        type="checkbox"
      />
      Show Outlines
    </InlineLabel>
  );
}

function ExplodeSetting() {
  const [explodeX, setExplodeX] = useSetting("explodeX");
  const [explodeZ, setExplodeZ] = useSetting("explodeZ");

  return (
    <fieldset>
      <legend>Explode</legend>
      <Stack>
        <InlineLabel>
          <span>X</span>
          <input
            max="3"
            min="0"
            onChange={(event) => setExplodeX(event.target.valueAsNumber)}
            step="0.1"
            type="range"
            value={explodeX}
          />
        </InlineLabel>
        <InlineLabel>
          <span>Z</span>
          <input
            max="24"
            min="1"
            onChange={(event) => setExplodeZ(event.target.valueAsNumber)}
            step="1"
            type="range"
            value={explodeZ}
          />
        </InlineLabel>
      </Stack>
    </fieldset>
  );
}

function ElevationSetting({ levels }) {
  const [elevation, setElevation] = useSetting("elevation");

  function handleChange(event) {
    setElevation(event.target.value);
  }

  const options = [
    ["All", ""],
    ...Array(levels)
      .fill(null)
      .map((_, i) => [`Level ${i}`, i.toString()])
  ];

  return (
    <fieldset>
      <legend>Elevation Visibility</legend>
      <Stack>
        {options.map(([label, value]) => {
          return (
            <InlineLabel key={value}>
              <input
                checked={elevation === value}
                name="elevation"
                onChange={handleChange}
                type="radio"
                value={value}
              />
              {label}
            </InlineLabel>
          );
        })}
      </Stack>
    </fieldset>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <Container>
        <Mover initialScale={1.1} initialX={20} initialY={20}>
          <TweetScreen />
        </Mover>
        <Settings>
          <ElevatedSetting />
          <ElevatedSettingsContainer>
            <ShowLabelsSetting />
            <ShowShadowsSetting />
            <ShowOutlinesSetting />
            <ExplodeSetting />
            <ElevationSetting levels={4} />
          </ElevatedSettingsContainer>
        </Settings>
      </Container>
    </SettingsProvider>
  );
}

import React, { useState } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const body = css`
  border: 1px solid black;
  padding: 30px;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  box-shadow: 5px 10px #888888;
  border-radius: 6px;
`;

const headerMain = css`
  text-align: center;
  text-transform: uppercase;
  font-family: fantasy;
`;

const instructions = css`
  font-family: fantasy;
  font-size: 2em;
  text-align: center;
  padding: 30px;
`;

const button = css`
  border: 5px dotted black;
  padding: 20px;
  font-family: fantasy;
  font-size: 130%;
  border-radius: 5px;
`;
function generatesColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [color, setColor] = useState(generatesColor());
  return (
    <div className="App" css={body} style={{ backgroundColor: color }}>
      <h1 css={headerMain}>This is Alenio's random color generator</h1>
      <p css={instructions}>Just click the button!</p>
      <button
        css={button}
        onClick={function onClick() {
          setColor(generatesColor());
        }}
      >
        Click here! {generatesColor}
      </button>
    </div>
  );
}

export default App;

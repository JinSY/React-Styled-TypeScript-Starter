import React from 'react';
import styled from 'styled-components';

const Rectangle = styled.div`
  height: 30px;
  width: 100%;
  background-color: rgb(120,100,123);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-size: 30px;
  color: white;
  padding: 16px;
`;

const App = (): JSX.Element => (
  <div>
    <Rectangle>
      React Styled-Components TypeScript
    </Rectangle>
  </div>
);

export default App;
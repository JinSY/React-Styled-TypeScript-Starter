import * as React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: rgb(0,0,190);
`;

const Square = styled.div`
  height: 30px;
  width: 100%;
  background-color: rgb(100,100,123);
`;

const App = () => (
  <div>
    <Square />
    React Styled-Components TypeScript
    <Circle />
  </div>
);

export default App;
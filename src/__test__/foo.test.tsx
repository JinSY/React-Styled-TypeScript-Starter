import React from 'react';
import { shallow } from 'enzyme';

import App from '../app';

test('test', () => {
  expect(true).toBeTruthy();
});

test('snapshot', () => {
  const result = shallow(<App />);

  expect(result).toMatchSnapshot();
})
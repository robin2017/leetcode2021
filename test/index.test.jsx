import React from 'react';
import { shallow } from 'enzyme';
import Leetcode2021 from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<Leetcode2021 />);
  expect(wrapper.find('.Leetcode2021').length).toBe(1);
});

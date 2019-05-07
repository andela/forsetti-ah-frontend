import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../../components/Comments';

describe('Comment component', () => {
  test('should render comment component correctly', () => {
    const wrapper = shallow(<Comments />);

    expect(wrapper).toMatchSnapshot();
  });
});

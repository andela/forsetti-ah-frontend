import React from 'react';
import Routes from '../../routes';
import { shallow } from 'enzyme';

describe('Routes ', () => {
  test('should test article route', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});

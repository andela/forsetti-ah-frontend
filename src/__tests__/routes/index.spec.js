import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes';

describe('Routes', () => {
  test('should test default route', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
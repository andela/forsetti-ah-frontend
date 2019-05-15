import React from 'react';
import { shallow } from 'enzyme';
import { SideDrawer } from '../../components/SideDrawer';

describe('Side Drawer', () => {
  test('should render side drawer correctly', () => {
    const wrapper = shallow(<SideDrawer show='true' />);

    expect(wrapper).toMatchSnapshot();
  });
});

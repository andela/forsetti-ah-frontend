import React from 'react';
import { shallow } from 'enzyme';
import FollowerPage from '../../components/FollowerPage';

describe('Follower Page', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<FollowerPage />);
    expect(wrapper).toMatchSnapshot();
  })
});

import React from 'react';
import { shallow } from 'enzyme';
import { FollowerModal } from '../../components/FollowerModal';

describe('Follower Modal', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<FollowerModal />);
    expect(wrapper).toMatchSnapshot();
  })
});

import React from 'react';
import { shallow } from 'enzyme';
import { FollowingPane } from '../../components/FollowingPane';

describe('Following Pane', () => {
  it('should match snapshot', () => {
    const props = {
      followings: [],
      isLoadingFollowings: true
    };
    const wrapper = shallow(<FollowingPane {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
});

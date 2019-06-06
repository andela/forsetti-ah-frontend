import React from 'react';
import { shallow } from 'enzyme';
import { FollowerPane } from '../../components/FollowerPane';

describe('Follower Pane', () => {
  it('should match snapshot', () => {
    const props = {
      isLoadingFollowers: true,
      followers: []
    };
    const wrapper = shallow(<FollowerPane {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
});

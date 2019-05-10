import React from 'react';
import renderer from 'react-test-renderer';
import { LandingPage } from '../../containers/LandingPage';

describe('<LandingPage />', () => {
  it('renders correctly', () => {
    const props = {
      showSideDrawer: {
        showSideDrawer: false,
      },
    };
    const tree = renderer.create(<LandingPage {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

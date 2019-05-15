import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../containers/LandingPage';

describe('<LandingPage />', () => {
  it('renders correctly', () => {
    const props = {
      showSideDrawer: {
        showSideDrawer: false,
      },
      modal: {
        showModal: false,
      },
    };
    const LandingPageComponent = shallow(<LandingPage {...props} />);
    expect(LandingPageComponent).toMatchSnapshot();
  });
});

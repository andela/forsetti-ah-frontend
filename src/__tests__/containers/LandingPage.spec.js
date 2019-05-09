import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../containers/LandingPage';
import { articles as articlesMock } from '../../testUtils/testsMockData/articles.mock-data';

describe('<LandingPage />', () => {
  it('renders correctly', () => {
    const props = {
      showSideDrawer: {
        showSideDrawer: false,
      },
      modal: {
        showModal: false,
      },
      article: {
        isLoading: false,
        aritcles: articlesMock
      },
      getAllArticles: jest.fn()
    };
    const LandingPageComponent = shallow(<LandingPage {...props} />);
    expect(LandingPageComponent).toMatchSnapshot();
  });
});
 
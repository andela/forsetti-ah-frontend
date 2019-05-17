import React from 'react';
import { shallow } from 'enzyme';
import { articles as articlesMock } from '../../testUtils/testsMockData/articles.mock-data';
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
      articles: {
        isLoading: false,
        aritcles: articlesMock
      },
      getAllArticles: jest.fn()
    };
    const LandingPageComponent = shallow(<LandingPage {...props} />);
    expect(LandingPageComponent).toMatchSnapshot();
  });
});
 
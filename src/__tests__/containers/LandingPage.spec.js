import React from 'react';
import { shallow } from 'enzyme';
import { articles as articlesMock } from '../../testUtils/testsMockData/articles.mock-data';
import { LandingPage, mapStateToProps } from '../../containers/LandingPage';

describe('<LandingPage />', () => {
  beforeAll(() => {  
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => { return { matches: true } })
    });
  });

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
    getAllArticles: jest.fn(),
    history: {
      action: 'POP'
    },
    openModal: jest.fn(),
    topRatedArticles: jest.fn(),
    topArticles: {
      topRated: []
    }
  };

  it('renders correctly', () => {
    const LandingPageComponent = shallow(<LandingPage {...props} />);
    expect(LandingPageComponent).toMatchSnapshot();
  });

  it('opens login modal on redirect', () => {
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
      getAllArticles: jest.fn(),
      history: {
        action: 'REPLACE'
      },
      openModal: jest.fn(),
      topRatedArticles: jest.fn(),
      topArticles: {
        topRated: []
      }
    };
    const LandingPageComponent = shallow(<LandingPage {...props} />);
    expect(props.openModal).toHaveBeenCalled();
  });

  test('should return mapStateToProps object', () => {
    const state = {
      articles: {},
      topArticles: {}
    };
    const action = mapStateToProps(state);
    expect(action).toEqual({
      articles: state.articles,
      topArticles: state.topArticles
    });
  });
});

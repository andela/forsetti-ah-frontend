import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Header } from '../../../components/common/Header';

const props = {
  history: {
    location: {
      pathname: ''
    }
  }
};

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = shallow(<Header {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

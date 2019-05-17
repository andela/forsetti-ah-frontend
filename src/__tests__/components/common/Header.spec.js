import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Header } from '../../../components/common/Header';

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
  });
});

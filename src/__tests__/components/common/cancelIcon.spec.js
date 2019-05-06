import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CancelIcon from '../../../components/common/CancelIcon';

describe('<CancelIcon  />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CancelIcon />);
  });
  it('renders the CancelIcon  correctly', () => {
    const tree = renderer.create(<CancelIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

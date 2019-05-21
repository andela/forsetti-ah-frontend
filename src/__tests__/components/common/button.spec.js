import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonComponent from '../../../components/common/Button';

describe('<ButtonComponent  />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ButtonComponent />);
  });
  it('renders the ButtonComponent  correctly', () => {
    const tree = renderer.create(<ButtonComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

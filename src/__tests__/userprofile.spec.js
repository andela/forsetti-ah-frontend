import React from 'react';
import { shallow } from 'enzyme';
import { UserProfile } from '../components/UserProfile';


const UserName = () => <h2>Forsetti</h2>;

describe('<UserProfile />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<UserProfile />);
    expect(wrapper.find(<UserName />));
  });
});

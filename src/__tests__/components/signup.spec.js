import React from 'react';
import { shallow, mount } from 'enzyme';
import { SignUp } from '../../components/SignUp';


describe('First React component test with Enzyme', () => {
  const dispatch = jest.fn()
  const signup = shallow(<SignUp dispatch={dispatch} />);
   it('renders without crashing', () => {
     expect(signup.find('div#signup').exists()).toBe(true);
     expect(signup.find('Modal').exists()).toBe(true);
   });
  it('updates state when input is changed', () => {
    signup.find('Input').first().prop('onChange')({
      target:{name: 'firstname', value: 'forsetti'}
    })
    expect(signup.state('firstname')).toEqual('forsetti');
  });
  it('submits the form', () => {
    signup.find('form').simulate('submit', {
      preventDefault: () => 'form'
    })
    expect(dispatch.mock.calls.length).toEqual(1)
  })
  it('toggle modal', () => {
    signup.find('Modal').prop('toggle')()
    expect(signup.state('modal')).toEqual(false);
  })
});

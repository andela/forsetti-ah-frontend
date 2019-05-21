import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Routes are returned', () => {
  const app = shallow(<App />);
   it('renders the various routes', () => {
     expect(app.length).toEqual(1);
    });
});

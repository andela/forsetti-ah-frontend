import React from 'react';
import { shallow } from 'enzyme';
import { BaseLayoutComponent } from '../../../components/common/BaseLayout';

describe('<BaseLayout />', () => {
  it('renders correctly', () => {
    beforeAll(() => {  
      Object.defineProperty(window, "matchMedia", {
        value: jest.fn(() => { return { matches: true } })
      });
    });
    const props = {
      showSideDrawer: true,
      modal: {
        showModal: true
      },
      reset: {
        isModalOpen: true
      }
    };
    const tree = shallow(<BaseLayoutComponent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

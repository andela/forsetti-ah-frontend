import React from 'react';
import { shallow } from 'enzyme';
import { EmailShareModal } from '../../components/EmailShareModal';

describe('Email Share Modal Component', () => {

    const props = {
        isOpen: true, 
        emailShareModal: false
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<EmailShareModal {...props} />);
    })
    test('Email share modal article should render', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
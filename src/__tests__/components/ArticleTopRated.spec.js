import React from 'react';
import { shallow } from 'enzyme';
import { ArticleTopRated } from '../../components';

describe('Article Top rated', () => {
  it('should render article top rated correctly', () => {
    const wrapper = shallow(<ArticleTopRated />);

    expect(wrapper).toMatchSnapshot();
  });
});

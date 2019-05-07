import React from 'react';
import { shallow } from 'enzyme';
import ArticleBody from '../../components/ArticleBody';

describe('Article body component', () => {
  test('should render comment component correctly', () => {
    const bodyProps = {
      body: 'this is the body', claps: 0
    };
    const wrapper = shallow(<ArticleBody {...bodyProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

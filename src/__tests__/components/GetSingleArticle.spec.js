import React from 'react';
import { shallow } from 'enzyme';
import { GetSingleArticle, mapStateToProps } from '../../components/GetSingleArticle';
import { getSingleArticle } from '../../actions';

const localStorageMock = {
  getItem: jest.fn(),
  removeItem: jest.fn()
};

global.localStorage = localStorageMock;

const article = {
  article: {
    author: {
      id: 'ffffabd5-4a5b',
      bio: 'test bio',
      image: 'image',
      username: 'john doe',
    },
    id: 'ffffabd5-4a5b',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    claps: '2 claps',
    comments: '0 comments',
    description: 'Lorem ipsum dolor sit amet',
    rating: '0',
    image: null,
    readingTime: '2',
    slug: 'Lorem ipsum dolor sit amet-12345',
    title: 'Lorem ipsum dolor sit amet',
    success: true
  }
};
const error = {
  article: {
    success: false
  }
}
const showEmailShareModal = jest.fn();
const emailShareModal = {
  emailShareModal: {
    showEmailShareModal
  }
}

const openLoginModalAction = jest.fn();
const openEmailShareModalAction = jest.fn();

describe('Get single article component', () => {
  test('should render get single article component', () => {
    const wrapper = shallow(<GetSingleArticle
      match={{
        params: { slug: 'ffffabd5-4a5b' }
      }}
      getOneArticle={getSingleArticle}
      {...article}
      emailShareModal = {emailShareModal}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render 404 page when single article not found', () => {
    const wrapper = shallow(<GetSingleArticle
      match={{
        params: { slug: 'ffffabd5-4a5b' }
      }}
      getOneArticle={getSingleArticle}
      {...error}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should return article mapStateToProps object', () => {
    const action = mapStateToProps(article);
    expect(action).toEqual({
      article: article.article,
    });
  });

  test('should return emailShareModal mapStateToProps object', () => {
    const state = mapStateToProps(emailShareModal);
    expect(state).toEqual({
      emailShareModal: emailShareModal.emailShareModal
    });
  });

  test('should test if open modal returns openLoginModalAction if localstorage is not set', () => {

    const wrapper = shallow(<GetSingleArticle
      match={{
        params: { slug: 'ffffabd5-4a5b' }
      }}
      getOneArticle={getSingleArticle}
      {...article}
      emailShareModal = {emailShareModal}
      openLoginModalAction = {openLoginModalAction}
      openEmailShareModalAction= {openEmailShareModalAction}
    />);
    localStorage.removeItem('token');
    expect(wrapper.instance().openModal())
  });
  test('should test if open modal returns openEmailShareModalAction if localstorage is set', () => {

    const wrapper = shallow(<GetSingleArticle
      match={{
        params: { slug: 'ffffabd5-4a5b' }
      }}
      getOneArticle={getSingleArticle}
      {...article}
      emailShareModal = {emailShareModal}
      openLoginModalAction = {openLoginModalAction}
      openEmailShareModalAction={openEmailShareModalAction}
    />);
    localStorage.setItem('token', 'isssxxsxx');
    expect(wrapper.instance().openModal());
  });
});

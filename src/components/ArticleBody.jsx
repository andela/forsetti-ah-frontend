import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';

import {
  facebook,
  twitter,
  bookmarkWhite,
  hands,
  email
} from '../assets';

const url = 'https://forsetti-ah-frontend-staging.herokuapp.com/';

const ArticleBody = ({
  body, claps, title, shareModal
}) => (
  <div className='row article-section mt-3 '>
    <div
      className='article-body col-sm-10 col-md-10 col-lg-9
              d-flex flex-column mx-2 text-left mx-lg-5 pl-4 pb-5 offset-5'
      dangerouslySetInnerHTML={{ __html: body }}
    />
    <div className='share col-sm-2 col-md-1 col-lg-1
            mx-4 mx-md-2 mt-sm-4 mb-sm-4 my-lg-6 d-flex flex-column position-sticky px-0'
    >
      <div className='row'>
        <span className='rounded-circle social col-md-12 col-3 mb-2'>
          <a href='/' className='align-self-center'>
            <img src={hands} alt='claps' className='p-1' />
            <span className='p-0 h-50 text-dark'>
              { `${claps}` }
            </span>
          </a>
        </span>
        <span
          className='col-md-12 col-2 rounded-circle'
          onClick={shareModal}
          role='button'
          tabIndex='0'
          onKeyDown={null}
        >
          <img
            src={email}
            alt='google'
            className='py-md-2 social-icon'
          />
        </span>
        <span className='col-md-12 col-2 rounded-circle '>
          <FacebookShareButton
            quote={title}
            url={`${url}/article/${title}`}
            className='share'
          >
            <img src={facebook} alt='facebook' className='h-50 py-md-2 social-icon' />
          </FacebookShareButton>
        </span>
        <span className='col-md-12 col-2 rounded-circle '>
          <TwitterShareButton
            url={`${url}/article/${title}`}
            title={title}
            className='share'
          >
            <img src={twitter} alt='twitter' className='h-50 py-md-2 social-icon' />
          </TwitterShareButton>
        </span>
        <span className='col-md-12 col-1 rounded-circle '>
          <a href='/'>
            <img src={bookmarkWhite} alt='bookmarks' className='h-50 py-md-2 social-icon' />
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default ArticleBody;

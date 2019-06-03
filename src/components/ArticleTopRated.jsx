import React from 'react';
import { withRouter } from 'react-router-dom';
import { user } from '../assets';

const ArticleTopRated = ({
  title,
  description,
  readingTime,
  image,
  firstname,
  username,
  slug,
  history
}) => (
  <div
    className='card mt-3'
    style={{ cursor: 'pointer' }}
    onClick={() => history.push(`article/${slug}`)}
    role='button'
    tabIndex='-1'
    onKeyDown={null}
  >
    <div className='card-body p-2'>
      <div className='row'>
        <span className='col' style={{ fontSize: '1.2rem' }}>
          {title}
        </span>
      </div>
      <div className='row'>
        <span className='col' dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className='row p-0'>
        <div className='col-8'>
          <p className='row pl-3 mt-2'>
            <img
              src={image || user}
              alt='user'
              className='rounded-circle media m-0 mr-1'
              style={{ objectFit: 'cover', width: '20px', height: '20px' }}
            />
            {
            username || firstname
         }
          </p>
        </div>
        <div className='col-4 mt-2 mb-0'>
          {
          ` ${Math.ceil(readingTime / 1000.0)} min read`
        }
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(ArticleTopRated);

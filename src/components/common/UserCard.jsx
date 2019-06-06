import React from 'react';
import { user } from '../../assets';
import Button from './Button';

const UserCard = ({
  image, name, type, username, bio, action
}) => (
  <div className='user-card shadow-sm mb-3'>
    <div className='user-card-img'>
      <img src={image || user} alt='default user' />
    </div>
    <div className='user-card-name ml-3'>
      <p className='user-card-name'>{name}</p>
      <p className='user-card-username'>{username}</p>
      <p className='user-card-bio'>{bio}</p>
    </div>
    <div className='user-card-button ml-3 mt-2'>
      <Button
        className='btn_primary'
        onClick={action}
      >
        {type === 'following' ? 'following' : 'follow'}
      </Button>
    </div>
  </div>
);

export default UserCard;

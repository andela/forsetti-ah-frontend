import React, { Component } from 'react';
import '../styles/index.scss';
import ninja from '../assets/images/ninja.jpg';

const UserName = () => <h2>Forsetti</h2>;

const Avatar = () => <img src={ninja} alt="ninja"/>;

const Userprofile = () => 
    <div>
        <UserName />
        <Avatar />,
    </div>

export default Userprofile;

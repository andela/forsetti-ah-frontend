import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/index.scss';
import ninja from '../assets/images/ninja.jpg';
import { increment, decrement } from '../actions';

const UserName = () => <h2>Forsetti</h2>;

const Avatar = () => <img src={ninja} alt='ninja' />;

export class UserProfile extends Component {
  increment = () => {
    const { increment: increments } = this.props;
    increments();
  };

  decrement = () => {
    const { decrement: decrements } = this.props;
    decrements();
  };

  render() {
    const { count } = this.props;
    return (
      <React.Fragment>
        <div>
          <UserName />
          <Avatar />
        </div>

        <div className='counter'>
          <h2>Counter</h2>
          <div>
            <button
              type='button'
              onClick={this.decrement}
            >
            -
            </button>
            <span
              className='count'
            >
              { count }
            </span>
            <button
              type='button'
              onClick={this.increment}
            >
            +
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ count: state.example.count });

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

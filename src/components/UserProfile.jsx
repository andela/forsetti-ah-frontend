import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.scss';
import ninja from '../assets/images/ninja.jpg';
import { increment, decrement } from '../actions';

const UserName = () => <h2>Forsetti</h2>;

const Avatar = () => <img src={ninja} alt="ninja"/>;

class UserProfile  extends Component{
  increment = () => {
    this.props.increment();
  };
    
  decrement = () => {
    this.props.decrement();
  };

  render(){
    return (
        <React.Fragment>
            <div>
                <UserName />
                <Avatar />,
            </div>

            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = state => { 
    return {
      count: state.example.count };
    }
  
  const mapDispatchToProps = {
    increment,
    decrement,
  };

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

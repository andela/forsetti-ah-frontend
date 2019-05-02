import example from '../action-types';

const { INCREMENT, DECREMENT } = example;

const decrement = () => ({ type: DECREMENT });

const increment = () => ({ type: INCREMENT });

export { decrement, increment };

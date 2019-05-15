import { navBarActionTypes } from '../action-types';

const { SHOW_SIDEDRAWER, HIDE_SIDEDRAWER } = navBarActionTypes;

/**
 * Shows the sideDrawer for mobile view
 */
const showSideDrawerAction = () => ({ type: SHOW_SIDEDRAWER });

/**
 * Hides the sideDrawer for mobile view
 */
const hideSideDrawerAction = () => ({ type: HIDE_SIDEDRAWER });


export { showSideDrawerAction, hideSideDrawerAction };

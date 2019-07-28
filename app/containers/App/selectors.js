/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () =>
  createSelector(
    selectGlobal,
    globalState => globalState,
  );

export { selectGlobal, makeSelectGlobal };

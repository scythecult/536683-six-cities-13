import { createReducer } from '@reduxjs/toolkit';
import {
  changeLocation,
  changeRequestStatus,
  fetchOffers,
  requireAuth,
} from './actions';
import { AuthStatus, DEFAULT_LOCATION, RequestStatus } from '../const';
import { TState } from '../types/state';

const initialState: TState = {
  authStatus: AuthStatus.Unknown,
  location: DEFAULT_LOCATION,
  offers: [],
  status: RequestStatus.Loading,
};

const reducer = createReducer(initialState, (builder) => [
  builder.addCase(changeLocation, (state, action) => {
    state.location = action.payload;
  }),
  builder.addCase(fetchOffers, (state, action) => {
    state.offers = action.payload;
  }),
  builder.addCase(changeRequestStatus, (state, action) => {
    state.status = action.payload;
  }),
  builder.addCase(requireAuth, (state, action) => {
    state.authStatus = action.payload;
  }),
]);

export { reducer };

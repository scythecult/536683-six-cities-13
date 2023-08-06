import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { TRequestStatus } from './reducer';
import { AuthStatus } from '../const';

const requireAuth = createAction<AuthStatus>('user/requireAuth');
const changeLocation = createAction<string>('nav/changeLocation');
const fetchOffers = createAction<TOffer[]>('offers/fetchOffers');
const changeRequestStatus = createAction<TRequestStatus>(
  'request/changeRequestStatus'
);

export { requireAuth, changeLocation, fetchOffers, changeRequestStatus };

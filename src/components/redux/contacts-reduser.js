import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';

const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSucccess]: (_, { payload }) => {
    return payload;
  },
  [contactsActions.addContactsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [contactsActions.deleteContacstSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [contactsActions.filterContacts]: (_, { payload }) => payload.toLowerCase(),
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

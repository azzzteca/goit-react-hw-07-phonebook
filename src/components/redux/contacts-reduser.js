import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import { v4 as uuidv4 } from 'uuid';

const itemsInitialState = [
  { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
  { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
  { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = createReducer(itemsInitialState, {
  [actions.addContact]: (state, { payload }) => {
    const doubleContact = state.find(
      contact => payload.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (doubleContact) {
      alert(`${payload.name} is alredy in contacts`);
      return state;
    }

    const newContact = {
      id: uuidv4(),
      name: payload.name,
      number: payload.number,
    };

    return [...state, newContact];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload.toLowerCase(),
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

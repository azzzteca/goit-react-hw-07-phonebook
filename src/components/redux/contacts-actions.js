import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);

export const fetchContactsSucccess = createAction(
  'contacts/fetchContactsSucccess',
);

export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactsRequest = createAction('contacts/addContactRequest');
export const addContactsSuccess = createAction(
  'contacts/addContactSuccess',
  ({ name, number }) => ({
    payload: {
      name,
      number,
    },
  }),
);
export const addContactsError = createAction('contacts/addContactError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContacstSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContacstError = createAction('contacts/deleteContactError');

export const filterContacts = createAction('contacts/filter');

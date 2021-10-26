import * as contactsActions from './contacts-actions';

export const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  fetch('http://localhost:4000/contacts')
    .then(response => {
      if (!response) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      dispatch(contactsActions.fetchContactsSucccess(data));
    })
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};

export const addContacts = contact => dispatch => {
  dispatch(contactsActions.addContactsRequest());

  fetch('http://localhost:4000/contacts', {
    method: 'POST',
    body: JSON.stringify({ name: contact.name, number: contact.number }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      if (!response) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      dispatch(contactsActions.addContactsSuccess(data));
    })
    .catch(error => dispatch(contactsActions.addContactsError(error)));
};

export const deleteContacts = id => dispatch => {
  dispatch(contactsActions.deleteContactsRequest());

  fetch(`http://localhost:4000/contacts/${id}`, { method: 'DELETE' })
    .then(() => {
      dispatch(contactsActions.deleteContacstSuccess(id));
    })
    .catch(error => dispatch(contactsActions.deleteContacstError(error)));
};

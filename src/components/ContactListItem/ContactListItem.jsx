import { useDispatch } from 'react-redux';
import * as contactsOperations from '../redux/contacts-operations';

export function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      {contact.name} {contact.number}
      <button
        type="button"
        id={contact.id}
        onClick={evt =>
          dispatch(contactsOperations.deleteContacts(evt.target.id))
        }
      >
        Delete
      </button>
    </>
  );
}

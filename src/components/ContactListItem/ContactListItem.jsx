import { useDispatch } from 'react-redux';
import * as actions from '../redux/contacts-actions';

export function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      {contact.name} {contact.number}
      <button
        type="button"
        id={contact.id}
        onClick={evt => dispatch(actions.deleteContact(evt.target.id))}
      >
        Delete
      </button>
    </>
  );
}

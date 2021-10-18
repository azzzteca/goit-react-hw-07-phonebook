import { connect } from 'react-redux';
import * as actions from '../redux/contacts-actions';

function ContactListItem({ contact, deleteContact }) {
  return (
    <>
      {contact.name} {contact.number}
      <button type="button" id={contact.id} onClick={deleteContact}>
        Delete
      </button>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteContact: evt => dispatch(actions.deleteContact(evt.target.id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);

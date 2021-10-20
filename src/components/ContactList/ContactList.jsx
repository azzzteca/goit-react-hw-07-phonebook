import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/contacts-selectors';
import { v4 as uuidv4 } from 'uuid';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export function ContactList({ children }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <div>
      <h2>Contacts</h2>
      {children}
      <ul>
        {!filter
          ? contacts.map(contact => (
              <li key={uuidv4()}>
                <ContactListItem contact={contact} />
              </li>
            ))
          : contacts
              .filter(contact => contact.name.toLowerCase().includes(filter))
              .map(contact => (
                <li key={contact.id}>
                  <ContactListItem contact={contact} />
                </li>
              ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  children: PropTypes.node,
};

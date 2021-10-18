import { connect } from 'react-redux';
import { Section } from '../Section/Section.jsx';
import InputForm from '../InputForm/InputForm.jsx';
import Filter from '../Filter/Filter.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import s from './App.module.css';

function App({ contacts }) {
  return (
    <div className={s.app}>
      <Section title={'Phonebook'}>
        <InputForm />

        <ContactList>{contacts.length > 2 && <Filter />}</ContactList>
      </Section>
    </div>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);

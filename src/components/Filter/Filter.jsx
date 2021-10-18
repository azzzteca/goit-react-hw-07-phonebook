import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../redux/contacts-actions';
import s from './Filter.module.css';

function Filter({ filterContact }) {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={filterContact} />
    </label>
  );
}

const mapDispatchToProps = dispatch => ({
  filterContact: evt => dispatch(actions.filterContact(evt.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  info: PropTypes.shape({
    contacts: PropTypes.array,
  }),
  filterContact: PropTypes.func.isRequired,
};

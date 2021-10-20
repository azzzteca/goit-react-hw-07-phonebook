import { useDispatch } from 'react-redux';
import * as actions from '../redux/contacts-actions';
import s from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={evt => dispatch(actions.filterContact(evt.target.value))}
      />
    </label>
  );
}

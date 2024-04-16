import { useContext } from 'react';
import QueryContext from '../../../context/QueryContext';

function PlaceholderText() {
  const query = useContext(QueryContext);
  return (
    <p>{query.length === 0 ? 'Please type a username' : 'User not found :/'}</p>
  );
}

export default PlaceholderText;

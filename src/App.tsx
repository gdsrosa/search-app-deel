import { ChangeEvent, useMemo, useState } from 'react';

import API from './services/api';
import { APIResponse } from './types';

import { useValidation } from './hooks/useValidation';

import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ItemsWrapper from './components/common/ItemWrapper/ItemsWrapper';
import SearchResults from './components/SearchResults/SearchResults';
import PlaceholderText from './components/common/PlaceholderText/PlaceholderText';

import './App.css';
import QueryContext from './context/QueryContext';

function App() {
  const [users, setUsers] = useState<APIResponse[] | null>(null);
  const [query, setQuery] = useState<string>('');

  const { error, classname } = useValidation(query);

  const filteredUsersList = useMemo(() => {
    return users?.filter(
      user => query && user.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [users, query]);

  async function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    const minLength = 2;
    const username = event.target.value;

    setQuery(username);

    if (username.length >= minLength) {
      const usersList = await API.fetchData();
      setUsers(usersList);
    }
  }

  return (
    <QueryContext.Provider value={query}>
      <div className="wrapper">
        <h1 className="title">Search Username Deel</h1>

        <form className="form" onSubmit={e => e.preventDefault()}>
          <input
            data-testid="search-username"
            className={`search ${classname}`}
            type="search"
            name="search"
            id="search"
            placeholder="e.g. Pablo Ruecker"
            value={query}
            onChange={handleQueryChange}
            required
          />
        </form>

        {error.message ? <ErrorMessage message={error.message} /> : null}

        {filteredUsersList?.length && !error.message ? (
          <ItemsWrapper>
            <SearchResults results={filteredUsersList} handleClick={setQuery} />
          </ItemsWrapper>
        ) : (
          <ItemsWrapper>
            <PlaceholderText />
          </ItemsWrapper>
        )}
      </div>
    </QueryContext.Provider>
  );
}

export default App;

import { Dispatch, SetStateAction, Fragment } from 'react';

import { APIResponse } from '../../types';
import HighlightedText from '../HighlightedText/HightlightText';

import './SearchResults.css';

type SearchResultsProps = {
  results: APIResponse[];
  handleClick: Dispatch<SetStateAction<string>>;
};

function SearchResults({ results, handleClick }: SearchResultsProps) {
  return (
    <Fragment>
      {results?.map(user => (
        <p
          className="container__item"
          key={user.id}
          onClick={() => handleClick(user.name)}
        >
          <HighlightedText text={user.name} />
        </p>
      ))}
    </Fragment>
  );
}
export default SearchResults;

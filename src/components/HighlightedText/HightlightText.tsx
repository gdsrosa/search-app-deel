import { Fragment, useContext } from 'react';

import './HighlightedText.css';
import QueryContext from '../../context/QueryContext';

type HighlightedTextProps = {
  text: string;
};

function HighlightedText({ text }: HighlightedTextProps) {
  const query = useContext(QueryContext);

  function highlightText(text: string, highlight: string) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return parts.map((part, index) => (
      <Fragment key={`highlight-${index}-item`}>
        {part.toLowerCase() === highlight.toLowerCase() ? (
          <strong className="highlighted">{part}</strong>
        ) : (
          part
        )}
      </Fragment>
    ));
  }

  return <Fragment>{highlightText(text, query)}</Fragment>;
}

export default HighlightedText;

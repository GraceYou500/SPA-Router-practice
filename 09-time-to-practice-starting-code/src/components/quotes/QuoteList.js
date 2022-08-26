import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    // if (ascending) {
    //   return quoteA.id - quoteB.id;
    // } else {
    //   return quoteB.id - quoteA.id;
    // }
    // if (quoteA.id > quoteB.id) {
    //   console.log(quoteA.id, quoteB.id, quoteA.id - quoteB.id, -1);
    //   return -1;
    // } else if (quoteA.id < quoteB.id) {
    //   console.log(quoteA.id, quoteB.id, quoteA.id - quoteB.id, 1);
    //   return 1;
    // } else {
    //   return 0;
    // }
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = props => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const queryParams = new URLSearchParams(location.search); // return an object for query parameter(search) => {sort: asc}

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`
    );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

// quoteA.id > quoteB.id ? 1 : -1;

// if (A > B) {
//   return 1;
// } else {
//   return -1;
// }

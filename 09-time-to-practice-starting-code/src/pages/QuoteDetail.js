import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Grace', text: 'Learning JS is Great!' },
  { id: 'q3', author: 'Mia', text: 'Learning Eating is fun!' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  console.log(match);
  const Params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === Params.quoteId);

  if (!quote) {
    return <p>Not find in detail page</p>;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <p>{Params.quoteId}</p>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

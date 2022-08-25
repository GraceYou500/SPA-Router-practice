import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Grace', text: 'Learning JS is Great!' },
  { id: 'q3', author: 'Mia', text: 'Learning Eating is fun!' },
];

const QuoteDetail = () => {
  const Params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === Params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <p>{Params.quoteId}</p>
      <Route path={`/quotes/${Params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const Params = useParams();
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{Params.quoteId}</p>
      <Route path={`/quotes/${Params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory(); // return a history object => redirect to history page

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
    console.log(quoteData);

    // history.push('/quotes'); // push: allow user to go back, replace: not allow to go back page.
  };

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;

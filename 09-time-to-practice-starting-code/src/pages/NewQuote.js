import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

const NewQuote = () => {
  const history = useHistory(); // return a history object => redirect to history page

  const addQuoteHandler = quoteData => {
    console.log(quoteData);

    history.push('/quotes'); // push: allow user to go back, replace: not allow to go back page.
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;

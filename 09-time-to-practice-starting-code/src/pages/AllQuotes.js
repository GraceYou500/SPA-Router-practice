import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max1', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Grace3', text: 'Learning JS is Great!' },
  { id: 'q3', author: 'Mia5', text: 'Learning Eating is fun!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;

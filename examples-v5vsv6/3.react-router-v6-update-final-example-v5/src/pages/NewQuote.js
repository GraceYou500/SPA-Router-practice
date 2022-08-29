import { useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  // const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      // history.push('/quotes');
      useNavigate("/quotes");
    }
  }, [status, useNavigate]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;

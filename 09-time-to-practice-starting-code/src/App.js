import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
// import QuoteDetail from './pages/QuoteDetail';
// import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
// import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote')); // which we pass to React lazy, will be excuted by React when the NewQuote component is needed.

const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));

const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

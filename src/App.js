import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

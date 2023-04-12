import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./routes/List";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

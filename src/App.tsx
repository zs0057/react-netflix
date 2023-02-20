import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Routes/Search";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Header from "./Routes/Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path={["/", "/movies/:movieID"]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

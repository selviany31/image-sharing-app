import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Detail from "./Pages/Detail";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Style/Home.css";

function App() {
  return (
    <div>
      <Router>
        <div className="header">
          <div className="container">
            <div className="header-wrapper">
              <Link to="/">
                <h1>ImgApp</h1>
              </Link>
              <form className="search-wrapper">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search..."
                />
              </form>
              <Link to="/favorite">
                <h1>Favorite</h1>
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/favorite" component={Favorite} />
          <Route path="/detail/:id" component={Detail} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/pets" className="navbar-brand">
            Pet Adopter
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/pets"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/pets"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/pets/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

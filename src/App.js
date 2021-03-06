import React from "react";
//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import CountryStats from "./components/CountryStats";
import Tutorial from "./components/tutorial.component";
import WorldStats from "./components/worldStats";
import HomePage from "./components/homePage";

function App() {


  return (
    
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            {/* <a href="/" className="navbar-brand">
              Home
            </a> */}

            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/yashpandey73"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/worldStats"} className="nav-link">
                  World Stats
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/countryStats"} className="nav-link">
                  Country Wise Stats
                </Link>
              </li>
            </div>
          </nav>

          <div >
            <Switch>
              <Route exact path={["/", "/yashpandey73"]} component={HomePage} />
              <Route exact path={["/worldStats"]} component={WorldStats} />
              <Route exact path="/countryStats" component={CountryStats} />
              <Route path="/tutorials/:id" component={Tutorial} />
            </Switch>
          </div>
        </div>
      </Router>
      <div>
      </div>
    </div>

  );
  /*  return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>
   ); */

}

export default App;

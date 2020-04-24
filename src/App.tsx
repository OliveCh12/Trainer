import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './components/Header'
import List from "./components/List";
import Form from "./components/Form";
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard/Dashboard";
import Stats from "./components/Stats"
import Alert from './components/Alert'


import { GlobalProvider } from './components/context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <Alert />
          <Switch>
            <Route path="/start">
              <Dashboard />
            </Route>
            <Route path="/">
              <div className="wrapper">
                <div className="container">
                  <div className="panels">
                    <div className="panel">
                      <h3>Add Exercice</h3>
                      <Form />
                    </div>
                    <div className="panel">
                      <Stats />
                    </div>
                    <div className="panel">
                      <h3>Today training exercices :</h3>
                      <List />
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About'
import {Navbar} from "./Pages/Components/Navbar";
import {Alert} from "./Pages/Components/Alert";
import {AlertState} from "./Context/alert/AlertState";
import {FirebaseState} from "./Context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container mt-5">
            <Alert />
            <Switch>
              <Route component={Home} exact path='/'/>
              <Route component={About} path='/about'/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;

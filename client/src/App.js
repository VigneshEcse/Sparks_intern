import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Viewall from './components/Viewall';
import Viewone from './components/Viewone';
import Error from './components/Error';
import Amttrans from './components/Amttrans';
import History from './components/Histroy';

import Navigation from './components/Navigation';

import './App.css';
import balance from './components/balance';

function App() {
  return (

    <div className="App">
      <div className="App-header">

      <BrowserRouter>

        <div>
          <Navigation />

            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Viewall" component={Viewall}/>
              <Route path="/Viewone" component={Viewone}/>
              <Route path="/Amttrans" component={Amttrans}/>
              <Route path="/History" component={History}/>
              <Route path="/balance" component={balance}/>

              <Route component={Error}/>
            </Switch>
        </div> 
      </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderComponent from  './components/HeaderComponent';
import FooterComponent from  './components/FooterComponent';
import ShowNoticesComponent from './components/ShowNoticesComponent';

function App() {
  return (
    <div>
      <Router>
         <HeaderComponent/>
            <div className="container">
            <Switch>
              <Route path = "/" exact component = {ShowNoticesComponent}></Route>
            </Switch>
            </div>
         <FooterComponent/>
       </Router>
    </div>
  );
}

export default App;

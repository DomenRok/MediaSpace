import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import {Home} from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Route path="/" render={ (props) => <Home {...props} compiler="neki" framework="react"/>}/>
        {/*<Route path="/main" render={ (props) => <Logged {...props} />}/>*/}
    </HashRouter>
  );
}

export default App;

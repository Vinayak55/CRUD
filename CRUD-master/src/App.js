import './App.css';
import Navbar from './component/Navbar';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit'
  

function App() {
  return (
    <div>
      <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/add" component={Add}></Route>
        <Route exact path="/edit/:email" component={Edit}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

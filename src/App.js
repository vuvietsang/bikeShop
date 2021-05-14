import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Components/Header';
import ShowCart from './Features/Cart/pages/ShowCart';
import ListBike from './Features/ListBike/pages/ListProduct';
function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/home' component={ListBike} exact />
        <Route path='/cart' component={ShowCart} exact />
      </Switch>
    </div>
  );
}
export default App;

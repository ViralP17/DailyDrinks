import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import OrderList from './components/OrderList';
import AddOrder from './components/AddOrder';
import EditOrder from './components/EditOrder';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
       <AppNavbar/>
       <Router>
        <Switch>
          <Route exact path="/" component={OrderList} />
          <Route exact path="/add" component={AddOrder} />
          <Route exact path="/edit/:id" component={EditOrder} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

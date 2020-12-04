
import OrderList from './OrderList';
import AddOrder from './AddOrder';
import EditOrder from './EditOrder';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function Main() {
  return (
       <Router>
        <Switch>
          <Route exact path="/" component={OrderList} />
          <Route exact path="/add" component={AddOrder} />
          <Route exact path="/edit/:id" component={EditOrder} />
        </Switch>
      </Router>
  );
}

export default Main;

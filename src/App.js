import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/main';


function App() {
  return (
    <Provider store={store}>
       <AppNavbar/>
       <Main/>
    </Provider>
  );
}

export default App;

import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import Test from './pages/Test'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
      <Switch>
        <Route path="/" exact>
        <Header/>
        <Sidebar/>
        <Footer/>
        </Route>
        <Route path="/test" component={Test}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;

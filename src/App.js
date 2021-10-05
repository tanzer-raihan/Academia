
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonGroup, Button } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import SignUP from './Components/SignUP/SignUP';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/courses'>
        <Courses></Courses>
        </Route>
        <Route path='/recomendation'>
        <SignUP></SignUP>
        </Route>
        <Route path='/about'>
        <About></About>
        </Route>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='*'>
        <NotFound></NotFound>
        </Route>
        
      </Switch>
      <Footer></Footer>

      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

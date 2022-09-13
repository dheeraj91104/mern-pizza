import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route>
      <Route path='/' exact element={<Homescreen/>}/>
      <Route path='/cart' exact element={<Cartscreen/>}/>
      <Route path='/register' exact element={<Registerscreen/>}/>
      <Route path='/login' exact element={<Loginscreen/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

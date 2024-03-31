//import Items from './components/Items';  <Route path='/items' element={ <Items /> } /> 
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Basket from './components/Basket';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={ <Home /> } /> 
        <Route path='/basket' element={ <Basket /> } /> 
      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;

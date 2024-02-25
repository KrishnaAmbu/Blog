import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Page from './components/Add';
import Huheu from './components/Huheu';
import Addblog from './components/Addblog';
import {  Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
    {/* <Page/> */}
    <Huheu/>
    {/* <Addblog/> */}
    
    <Routes>
        <Route path="/add" element={<Addblog />}/>
        
    </Routes> 
 
    </div>
  );
}

export default App;

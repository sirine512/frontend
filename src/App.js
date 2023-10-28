import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Views/home'
import NavBar from './Components/navBar'
import Buy from './Views/buy'
import Rent from './Views/rent'
import Sell from './Views/sell';
import AddUser from './Components/addUser';
import Login from './Components/logIn';
import PropertyDetails from './Components/propertyDetails';



function App() {
  return (
    <div className='content'>
      <NavBar/>
    <Routes> 
    <Route path="/" element={<Home />} />

 
      <Route path='/Buy' element={<Buy/>}/>
      <Route path='/Rent' element={<Rent/>}/>
      <Route path="/property/:id" element={<PropertyDetails/>} />
      <Route path='/Sell' element={<Sell/>}/>
      <Route path='/LogIn' element={<Login/>}/>
      <Route path='/SignIn' element={<AddUser/>}/>
      <Route path='*' element={<h1 id='not'>Not Found</h1>}/>
     </Routes>
    </div>
  );
}

export default App;

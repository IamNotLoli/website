import React from 'react';
import './App.css';
import {On} from './Conpanents/Navigation/On'
import {Mailer} from './Conpanents/Mailer/Mailer'
import {Off} from './Conpanents/Navigation/Off'
import {Link, Route,Routes } from 'react-router-dom';
import {Alpha} from './Conpanents/Alpha/alpha'
import {Beta} from './Conpanents/Beta/beta'
import {Center} from './Conpanents/Center/center'


function App() {


  return (
    <div className="App">
      <div className='f12' >
        <Link to="/Off" className='f11'>🏠</Link>
        <Link to="/On" className='f11'>⛅</Link>
        <Link to="/Mailer" className='f11'>📧</Link>
        <Link to='/Alpha' className="f11">🏡2</Link>
        <Link to='/Beta' className="f11">🏡3</Link>
        <Link to='/Center' className="f11">🏡4</Link>
        
</div>
      <Routes>
        <Route path='/Off' element={<Off />}/> 
        <Route path='/On' element={<On />}/>
        <Route path='/Mailer' element={<Mailer />}/>
        <Route path='/Alpha' element={<Alpha />}/>
        <Route path='/Beta' element={<Beta />}/>
        <Route path='/Center' element={<Center />}/>
        
      </Routes>
      <Off />
      <Alpha />
      <Beta />
      <Center />
    </div>
  );
}

export default App;

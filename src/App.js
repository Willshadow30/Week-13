import React from 'react';
import './App.css'; //style code
import LoginForm from './Components/LoginForm'; //Login code
import Navigation from './Components/Navigation';// navigation code

function App(){
  return(
    <div className="App">
      <Navigation />  {/* Render the Navi components should apppear on top */}
      <LoginForm />   {/* Render the Login stuff should appear on the middle */}
    </div>
  );
}


export default App;

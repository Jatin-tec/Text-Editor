import React, { useState } from "react"
import Navbar from './components/Navbar'
import TxtForm from './components/TxtForm'

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = ()=>{
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor='#212529';
      document.body.style.colour='white';
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
    <Navbar title='TextUtils' aboutUs='About' theme={theme} toggleTheme={toggleTheme} />
    <TxtForm heading='Enter your text here' theme={theme} />
    </>
  );
}

export default App;

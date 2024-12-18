import './App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';
import {React, useState} from 'react';

function App() {

  const modes = {
    'light': 'bg-light',
    'primary': 'bg-primary',
    'secondary': 'bg-secondary',
    'info': 'bg-info',
    'warning': 'bg-warning',
    'danger': 'bg-danger',
    'success': 'bg-success',
    'dark': 'bg-dark'
  }

  const [currentMode, setCurrentMode] = useState(modes['light']);

  const toggleMode = () =>{
    if (currentMode === modes['dark']){
      setCurrentMode(modes['light']);
      document.title='Light Mode';
    }else{
      setCurrentMode(modes['dark']);
      document.title='Dark Mode';
    }
  }

  const handleSelect = (mode) =>{
    setCurrentMode(modes[mode]);
  }

  
  return (
    <div>
      <Navigation mode={currentMode} toggleMode={toggleMode} handleSelect={handleSelect} modes={modes}/>
      <Content mode={currentMode} modes={modes}/>
    </div>
  );
}

export default App;

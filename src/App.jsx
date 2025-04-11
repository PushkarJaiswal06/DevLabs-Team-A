import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/Homepage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Homepage />
    </>
  )
}

export default App;

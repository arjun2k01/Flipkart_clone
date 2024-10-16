import React from 'react'
import Header from './header/Header'
import Home from '../home/Home'
import Box from "@mui/material/Box";
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Box style={{marginTop: '54'}}>

      <Home/>
      </Box>
    </div>
  )
}

export default App

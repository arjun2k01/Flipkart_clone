import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'


const Container = styled(Box)`
padding: 20px 10px;
background-color: #f2f2f2;

`



const Home = () => {
  return (
      <>
      <Navbar />
      <Box>

      </Box>
          <Banner />
      </>
    
  )
}

export default Home

import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { navData } from '../constants/data'

const Component = styled(Box)`
display:flex;
margin:55px 130px 0 130px;
justify-content:space-between;

`

const Container = styled(Box)` 
padding: 12px 18px;
text-align:center;
`
const Text = styled(Typography)`  
font-size:16px;
font-weight:500;
font-family: inherit


`


const Navbar = () => {
  return (
    <Component>
          {
              navData.map(data => (
                  <Container>
                      <img src={ data.url} alt="nav" />
                      <Text>{data.text }</Text>
                  </Container>
              ))
      }
    </Component>
  )
}

export default Navbar

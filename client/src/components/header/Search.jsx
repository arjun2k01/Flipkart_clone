import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import React from 'react'


const SearchContainer = styled(Box)`
background-color: #fff;
width:38%;
border-radius: 3px;
margin-left: 11px;
display: flex;

`
const SearchInputBase = styled(InputBase)`
padding-left: 20px;
width: 100%;
font-size:unset;
`

const SearchIconBox = styled(Box)`
color: blue;
padding:5px;
display:flex;
`



const Search = () => {
  return (
      <SearchContainer>
          <SearchInputBase
              placeholder='Search for products,brands and more' />
          
          <SearchIconBox>
              <SearchIcon/>
          </SearchIconBox>
    </SearchContainer>
  )
}

export default Search

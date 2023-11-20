import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import Searchspace from './Searchspace'
function Navbar() {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position:'sticky' ,backgroundColor:"#000",top:0,justifyContent:'space-between'}}>
      <Link to='/' style={{display:'flex', alignItems:'center'}}>
      <img src={logo} alt='' height={45}></img>
      </Link>
      <Searchspace/>
    </Stack>
  )
}

export default Navbar

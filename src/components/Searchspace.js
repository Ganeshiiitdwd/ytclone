import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
function Searchspace() {
  const [term,setTerm]=useState('')
  const navigate=useNavigate()
  return (
    <Paper component="form" onSubmit={(e)=>{e.preventDefault() ;navigate(`/search/${term}`)}} sx={{borderRadius:20,border:'1px solid #e3e3e3',pl:2,boxShadow:'none',mr:{sm:5}}}>
  <input className='search-bar' placeholder='search...' value={term} onChange={(e)=>{setTerm(e.target.value)}}></input>
  <IconButton type='submit' sx={{p:'10px', color:'red'}}><Search/></IconButton>
    </Paper>
  )
}

export default Searchspace

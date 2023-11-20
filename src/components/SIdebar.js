import { Stack } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constants'
function SIdebar({selectedcg,setselectedcg}) {
    const  selectedcategory=selectedcg
  return (
   <Stack direction='row' sx={{overflowY:'auto', height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
     {categories.map((e)=>(
        <button className='category-btn' onClick={()=> setselectedcg(e.name)} style={{background:e.name===selectedcategory&&'#FC1503',color:'white'}}>
            <span style={{color:e.name===selectedcategory?'white':'red',marginRight:'15px'}}>{e.icon}</span>
            <span style={{opacity:e.name?1:0.8}}>{e.name}</span>
        </button>
     ))}
   </Stack>
  )
}

export default SIdebar

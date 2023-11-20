import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SIdebar from './SIdebar'
import Video from './Video' 
import { fetchData } from '../utils/fetchData'
function Feed() {
    const [selectedcg,setselectedcg]=useState('New')
    const [videosdata,setvideodata]=useState([])
    const [loading,setloading]=useState(false)
  useEffect(()=>{setloading(true);fetchData(`search?part=snippet&q=${selectedcg}`).then((data)=>setvideodata(data.items));setloading(false)},[selectedcg])
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
    <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
      <SIdebar selectedcg={selectedcg} setselectedcg={setselectedcg}/>
     <Typography className='copyright' variant='body2' sx={{mt:'1.5',color:'red'}}>
      copyright 2023 GB media
     </Typography>
    </Box>
    <Box p={2} sx={{overflowY:'auto' ,height:'90vh',flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>{selectedcg} <span style={{color:'#F31503'}}>Videos</span></Typography>
   {loading?<Typography color="white">loading...!</Typography>: <Video Videodata={videosdata}/>}
    </Box>
    </Stack>
  )
}

export default Feed

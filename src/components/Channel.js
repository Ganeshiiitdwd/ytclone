import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {fetchData} from '../utils/fetchData'
import { Box, Stack } from '@mui/material'
import ChannelCard from './Card/ChannelCard'
import VideoCard from './Card/VideoCard'
function Channel() {
  const {ch}=useParams() //it is nothing but the param we assigned in the app.js for the renderinf of the component
  const [channeldetail,setdetail]=useState(null)
  const [videoch,setvidoech]=useState([])
  useEffect(()=>{
   fetchData(`channels?part=snippet&id=${ch}`).then((data)=>setdetail(data?.items[0]))
   fetchData(`search?channelId=${ch}&part=snippet&order=date`).then((data)=>setvidoech(data?.items))
  },[ch])
  
  // console.log(channeldetail)
  console.log(videoch)
  return (
   <Box minHeight="95vh"> 
    <Box>
      <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,96,1) 0%, rgba(0,219,255,1) 93%)", zIndex:10,height:'300px'}}></div>
    <ChannelCard channeldata={channeldetail} marginTop='-111px'/>
     </Box>
       <Stack direction='row' gap={2} flexWrap='wrap' justifyContent='start' sx={{ml:{sm:'30px'}}}>
      {videoch.map((s)=>(
        <Box key={s} paddingBottom="20px">
        <VideoCard Videodata={s}/></Box>
      ))}
     </Stack>
   </Box>
  )
}

export default Channel

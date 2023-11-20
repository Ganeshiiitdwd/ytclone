import { Box, Stack } from '@mui/material'
import React from 'react'

import VideoCard from './Card/VideoCard'
import ChannelCard from './Card/ChannelCard'
function Video({Videodata,direction}) {
  // console.log(Videodata)
  // // console.log(Videodata[0].snippet.channelId)
  // console.log(Videodata[5].snippet)
if(!Videodata?.length) return 'Loading...'
  return (
    <Stack direction={direction||'row'} gap={2} flexWrap='wrap' justifyContent='start'>
      {Videodata.map((s)=>(
       
        <Box key={s} >
          {s.id.channelId&&<ChannelCard channeldata={s}/>}
          {s.id.videoId&&<VideoCard Videodata={s}/>}
          
        </Box>
     ) )}
    </Stack>
  )
}

export default Video

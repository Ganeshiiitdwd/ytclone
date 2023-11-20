import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {fetchData} from '../utils/fetchData'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import Video from './Video'
function VideoDetail() {
  const [videoDetail,setdetail]=useState(null)
  const [videosrelate,setvideo]=useState([])
  const {id}=useParams()
  useEffect(()=>{
     fetchData(`videos?part=snippet,statistics&id=${id}`)
     .then((data)=>setdetail(data.items[0]))
     //fetching the videos related to it
     fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
     .then((data)=>{setvideo(data.items)})
  },[id])
  //destructuring'
  if(!videoDetail?.snippet) return 'Loading....'
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail
  return (
  <Box minHeight="95vh">
    <Stack direction={{xs:'column' ,md:'row'}}>
      <Box flex={1}>
         <Box sx={{width:'100%',position:'sticky',top:'65px'}}>
         <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
         <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>{title}</Typography>
         <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} py={2} px={1}>
          <Link to={`/channel/${channelId}`}>
            <Typography variant={{sm:'subtitle1',md:'h6'}} color="#fff" >{channelTitle}</Typography>
            <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}></CheckCircle>
          </Link>
          <Stack direction="row" gap="22px" alignItems="center">
           <Typography variant='body1' sx={{opacity:0.7}}>{parseInt(viewCount).toLocaleString()} views</Typography>
           <Typography variant='body1' sx={{opacity:0.7}}>{parseInt(likeCount).toLocaleString()} likes</Typography>
          </Stack>
         </Stack>
         </Box>
      </Box>
      {/* to get the videos on the right of the main video playing */}
      <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
        <Video Videodata={videosrelate} direction="column"/>
    </Box>
    </Stack>
    {/* <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
        <Video Videodata={videosrelate} direction="column"/>
    </Box> */}
  </Box>
  )
}

export default VideoDetail

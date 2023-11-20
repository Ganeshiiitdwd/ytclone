import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../../utils/constants'
import { CheckCircle } from '@mui/icons-material';
function ChannelCard({channeldata,marginTop}) {
  return (
   <Box sx={{boxShadow:'none', borderRadius:'20px',width:{xs:'100%',md:'358px'}, display:'flex',justifyContent:'center',alignItems:'center', margin:'auto' ,marginTop}}>
        <Link to={`/channel/${channeldata?.id?.channelId}`}>
          <CardContent sx={{display:'flex' ,flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
          <CardMedia image={channeldata?.snippet?.thumbnails?.high?.url||demoProfilePicture} alt="" sx={{borderRadius:'50%',height:'180px', width:'180px',border:'1px solid #e3e3e3'}}></CardMedia>
         <Typography variant='h6'>{channeldata?.snippet?.title} <CheckCircle sx={{fontSize:12,color:'gray', ml:'5px'}}></CheckCircle></Typography>
         {channeldata?.statistics?.subscriberCount&&(
          <Typography>{parseInt(channeldata?.statistics?.subscriberCount).toLocaleString()}</Typography>
         )}
          </CardContent>
        </Link>
   </Box>
  )
}

export default ChannelCard

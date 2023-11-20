import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ Videodata }) => {
  // Destructure the properties, handling possible undefined values
  const { id, snippet } = Videodata || {};
  const videoId = id?.videoId;
  const thumbnailUrl = snippet?.thumbnails?.high?.url;
  // // console.log(videoId)
  // console.log(Videodata)
  return (
    <Card sx={{width:{xs:'100%',md:'358px'},boxShadow:'none',borderRadius:'5px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {thumbnailUrl && <CardMedia image={thumbnailUrl} alt={ snippet?.title} sx={{width:358,height:180}}/>}
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'100px'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>{snippet?.title.slice(0,70)||demoVideoTitle.slice(0,70)}</Typography>
      </Link>
      <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>{snippet?.channelTitle||demoChannelTitle}
        <CheckCircle sx={{fontSize:12,color:'gray', ml:'5px'}}></CheckCircle>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

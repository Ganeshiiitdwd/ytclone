
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import Search from './components/Search'
import Channel from './components/Channel'
function App() {
  return (
  <BrowserRouter>
   <Box sx={{backgroundColor:'#000'}}>
  <Navbar/>
  <Routes>
  <Route path='/' exact element={<Feed/>}/>
  <Route path='/video/:id' element={<VideoDetail/>} />
  <Route path='/channel/:ch' element={<Channel/>}/>
  <Route path='/search/:sht' element={<Search/>}/>
  </Routes>
   </Box>
  </BrowserRouter>
  );
}

export default App;

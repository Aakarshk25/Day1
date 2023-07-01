import {BrowseRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Feed } from '@mui/icons-material';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import ChannelDetail from './components/ChannelDetail';




const App = () =>
  (
    <BrowseRouter>
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/vedio/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
    </Box>
    </BrowseRouter>
  );



export default App
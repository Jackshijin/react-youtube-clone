/*
 * @Description: 
 * @Author: shrijin
 * @Date: 2023-05-17 10:48:19
 * @LastEditors: shrijin
 * @LastEditTime: 2023-05-18 11:04:42
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, Feed, Navbar, SearchFeed } from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;

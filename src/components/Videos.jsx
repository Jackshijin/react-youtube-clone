/*
 * @Description: Videos组件
 * @Author: shrijin
 * @Date: 2023-05-17 11:43:37
 * @LastEditors: shrijin
 * @LastEditTime: 2023-05-17 16:28:18
 */
import React from 'react';
import { Stack, Box } from '@mui/material';

import { Loader, VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  console.log('index videos', videos);
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* 不同分类下可能是视频也可能是频道，根据不同类型展示不同的card类型 */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail = {item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;

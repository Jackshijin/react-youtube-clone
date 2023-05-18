/*
 * @Description: 加载组件
 * @Author: shrijin
 * @Date: 2023-05-17 11:10:33
 * @LastEditors: shrijin
 * @LastEditTime: 2023-05-17 11:19:25
 */

import React from 'react';

import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => {
  <Box minHeight='95vh'>
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh'>
      <CircularProgress />
    </Stack>
  </Box>
}

export default Loader;
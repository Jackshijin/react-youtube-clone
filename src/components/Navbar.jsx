/*
 * @Description: 导航栏
 * @Author: shrijin
 * @Date: 2023-05-17 15:05:57
 * @LastEditors: shrijin
 * @LastEditTime: 2023-05-17 15:14:07
 */
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import { SearchBar } from './';

const Navbar = () => (
  <Stack 
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between'
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt='logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar;
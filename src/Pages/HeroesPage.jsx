import { Stack } from '@mui/material';

import { HeroList } from 'components/HeroList';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const HeroesPage = () => {
  const modal = useSelector(state => state.modal.modal);

  return (
    <Stack>
      <HeroList />
      {modal && <Outlet />}
    </Stack>
  );
};

export default HeroesPage;

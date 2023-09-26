import { Pagination, Stack } from '@mui/material';

const HeroPagination = ({ totalItem, hanblePage, currentPage }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: 'white',
        padding: '8px',
        borderRadius: '24px',
      }}
    >
      <Pagination
        count={totalItem}
        color="primary"
        page={currentPage}
        onChange={hanblePage}
      />
    </Stack>
  );
};

export default HeroPagination;

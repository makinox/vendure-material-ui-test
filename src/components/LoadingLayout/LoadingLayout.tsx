import { Box, CircularProgress } from '@mui/material';

export function LoadingLayout() {
  return (
    <Box justifyContent="center" sx={{ display: 'flex', marginTop: '15rem' }}>
      <CircularProgress color="error" />
    </Box>
  );
}

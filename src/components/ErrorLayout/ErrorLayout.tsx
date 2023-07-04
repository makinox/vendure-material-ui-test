import { Box, Button, Typography } from '@mui/material';

interface ErrorLayoutProps {
  callback: () => void;
}

export function ErrorLayout({ callback }: ErrorLayoutProps) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ display: 'flex', marginTop: '15rem' }}
    >
      <Typography variant="h3">Error loading the products</Typography>
      <Button variant="contained" color="error" onClick={callback}>
        Try again
      </Button>
    </Box>
  );
}

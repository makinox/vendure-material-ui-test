import { useQuery } from '@apollo/client';

import { Box, Button, CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { GET_PRODUCTS } from '@/graphql/queries';
import { ProductArticle } from '@/components';

export function ProductList() {
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS);

  if (error)
    return (
      <Box
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ display: 'flex', marginTop: '15rem' }}
      >
        <Typography variant="h3">Error loading the products</Typography>
        <Button variant="contained" color="error" onClick={() => refetch()}>
          Try again
        </Button>
      </Box>
    );

  if (loading)
    return (
      <Box justifyContent="center" sx={{ display: 'flex', marginTop: '15rem' }}>
        <CircularProgress color="error" />
      </Box>
    );

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: '4rem' }}
      justifyContent="center"
    >
      {data?.products.items.map((product) => (
        <ProductArticle key={product.id} product={product} />
      ))}
    </Grid>
  );
}

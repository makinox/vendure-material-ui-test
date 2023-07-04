import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';

import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button } from '@mui/material';

import { ErrorLayout, LoadingLayout, ProductArticle } from '@/components';
import { GET_PRODUCTS } from '@/graphql/queries';
import { PAGINATION_FACTOR } from '@/constants';

export function ProductList() {
  const [skipIndex, setSkipIndex] = useState(0);
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: { skip: skipIndex, take: PAGINATION_FACTOR },
  });

  const showLeftButton = useMemo(() => {
    const futureValue = skipIndex - PAGINATION_FACTOR;
    return futureValue >= 0;
  }, [skipIndex]);

  const showRightButton = useMemo(() => {
    const futureValue = skipIndex + PAGINATION_FACTOR;
    const totalItems = data?.products?.totalItems || 0;
    return futureValue < totalItems;
  }, [data?.products.totalItems, skipIndex]);

  if (error) return <ErrorLayout callback={() => refetch()} />;

  if (loading) return <LoadingLayout />;

  return (
    <>
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
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{ display: 'flex', marginTop: '2rem', gap: '2rem' }}
      >
        {showLeftButton && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => setSkipIndex((prev) => prev - PAGINATION_FACTOR)}
          >
            ←
          </Button>
        )}
        {showRightButton && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => setSkipIndex((prev) => prev + PAGINATION_FACTOR)}
          >
            →
          </Button>
        )}
      </Box>
    </>
  );
}

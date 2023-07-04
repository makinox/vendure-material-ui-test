import { useQuery } from '@apollo/client';

import Grid from '@mui/material/Unstable_Grid2';
import { GET_PRODUCTS } from '@/graphql/queries';
import { ProductArticle } from '@/components';

export function ProductList() {
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS);

  if (error)
    return (
      <section>
        <h2>Error loading th products</h2>
        <button onClick={() => refetch()}>Try again</button>
      </section>
    );

  if (loading)
    return (
      <section>
        <h2>Loading ...</h2>
      </section>
    );

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: '50px' }}
      justifyContent="center"
    >
      {data?.products.items.map((product) => (
        <ProductArticle key={product.id} product={product} />
      ))}
    </Grid>
  );
}

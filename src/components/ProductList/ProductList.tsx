import { useQuery } from '@apollo/client';

import { GET_PRODUCTS } from '@/graphql/queries';
import { ProductArticle } from '@/components';

import { ProductListStyled } from './ProductList.styles';

export function ProductList() {
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS);
  console.log({ data });

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
    <ProductListStyled>
      {data?.products.items.map((product) => (
        <ProductArticle key={product.id} product={product} />
      ))}
    </ProductListStyled>
  );
}

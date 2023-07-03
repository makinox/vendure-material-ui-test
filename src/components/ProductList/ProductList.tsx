import { useQuery } from '@apollo/client';

import { GET_PRODUCTS } from '@/graphql/queries';

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
    <section>
      {data?.products.items.map((product) => {
        return (
          <article>
            <div>
              <img
                src={product.assets[0]?.preview}
                alt={`Santex ${product.name}`}
              />
            </div>
            <div>
              <h3>{product.name}</h3>
              <span>{product.variants[0].price}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

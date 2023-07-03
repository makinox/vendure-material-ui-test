import { useMemo } from 'react';

import { GetProductsQuery } from '@/graphql/gql/graphql';
import { DEFAULT_IMAGE } from '@/constants';
import { ProductArticleStyled } from './ProductArticle.styles';

interface ProductArticleProps {
  product: GetProductsQuery['products']['items'][0];
}

export function ProductArticle({ product }: ProductArticleProps) {
  const image = useMemo(() => {
    const imagePreview = product.assets[0]?.preview;
    if (!imagePreview) return DEFAULT_IMAGE;
    return imagePreview;
  }, [product.assets]);

  return (
    <ProductArticleStyled>
      <div>
        <img src={image} alt={`Santex ${product.name}`} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <span>{product.variants[0].price}</span>
      </div>
    </ProductArticleStyled>
  );
}

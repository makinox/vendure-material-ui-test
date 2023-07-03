import { useMemo } from 'react';

import { GetProductsQuery } from '@/graphql/gql/graphql';
import { APP_PRICE_VARIANT, DEFAULT_IMAGE } from '@/constants';
import { formatPrice } from '@/utils';

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

  const price = useMemo(() => {
    const priceVariant = product?.variants[APP_PRICE_VARIANT];
    const pricePreview = priceVariant?.price;
    if (!pricePreview) return formatPrice(0, priceVariant.currencyCode);
    return formatPrice(pricePreview, priceVariant.currencyCode);
  }, [product.variants]);

  return (
    <ProductArticleStyled>
      <div>
        <img src={image} alt={`Santex ${product.name}`} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <div className="pricing-section">
          <span>{price}</span>
          <button>BUY</button>
        </div>
      </div>
    </ProductArticleStyled>
  );
}

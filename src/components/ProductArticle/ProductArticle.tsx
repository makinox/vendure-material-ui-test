import { useMemo } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import {
  CardMedia,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';

import { APP_PRICE_VARIANT, DEFAULT_IMAGE } from '@/constants';
import { GetProductsQuery } from '@/graphql/gql/graphql';
import { formatPrice } from '@/utils';
import { CardDescription } from './ProductArticle.styles';

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
    <Grid xs={12} sm={5} md={4} xl={3}>
      <Card>
        <CardMedia
          component="img"
          alt={`Santex ${product.name}`}
          height="160"
          image={image}
        />
        <CardContent>
          <Typography variant="h6">{product.name}</Typography>
          <CardDescription variant="subtitle2">
            {product.description}
          </CardDescription>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="error">
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

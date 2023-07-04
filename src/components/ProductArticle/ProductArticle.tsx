import { useMemo } from 'react';
import { useMutation } from '@apollo/client';
import Grid from '@mui/material/Unstable_Grid2';

import {
  CardMedia,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  CircularProgress,
} from '@mui/material';

import { GetProductsQuery } from '@/graphql/gql/graphql';
import { ADD_ITEM_TO_ORDER } from '@/graphql/mutations';
import { formatPrice } from '@/utils';

import {
  APP_DEFAULT_QUANTITY,
  APP_PRICE_VARIANT,
  DEFAULT_IMAGE,
} from '@/constants';

import { CardDescription } from './ProductArticle.styles';

interface ProductArticleProps {
  product: GetProductsQuery['products']['items'][0];
}

export function ProductArticle({ product }: ProductArticleProps) {
  const [addItem, { loading, error }] = useMutation(ADD_ITEM_TO_ORDER);

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

  const renderButton = useMemo(() => {
    if (error)
      return (
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={handleClick}
        >
          Try again
        </Button>
      );

    if (loading)
      return (
        <Button size="small" color="error">
          <CircularProgress size={23} color="error" />
        </Button>
      );

    return (
      <Button size="small" color="error" onClick={handleClick}>
        Buy
      </Button>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loading]);

  function handleClick() {
    const productVariantId = product?.variants[APP_PRICE_VARIANT].id;
    addItem({
      variables: { productVariantId, quantity: APP_DEFAULT_QUANTITY },
    })
      .then((data) => {
        console.log({ data });
      })
      .catch((catchError) => {
        console.log({ catchError });
      });
  }

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
        <CardActions>{renderButton}</CardActions>
      </Card>
    </Grid>
  );
}

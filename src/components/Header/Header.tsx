import { Chip } from '@mui/material';

import { useOrder } from '@/contexts/order';
import { formatPrice } from '@/utils';

import { HeaderStyles } from './Header.styles';

export function Header() {
  const { ordersSubtotal } = useOrder();

  return (
    <HeaderStyles
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Chip label="Shoping" variant="filled" color="error" />
      <Chip
        label={formatPrice(ordersSubtotal)}
        variant="outlined"
        color="error"
      />
    </HeaderStyles>
  );
}

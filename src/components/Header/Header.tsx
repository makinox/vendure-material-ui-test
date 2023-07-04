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
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="Santex logo"
      />
      <Chip
        label={formatPrice(ordersSubtotal)}
        variant="outlined"
        color="error"
      />
    </HeaderStyles>
  );
}

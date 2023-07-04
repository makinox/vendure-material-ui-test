import { Chip } from '@mui/material';

import { HeaderStyles } from './Header.styles';

export function Header() {
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
      <Chip label="$ 0" variant="outlined" color="error" />
    </HeaderStyles>
  );
}

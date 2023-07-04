import { Stack } from '@mui/material';

import { styled } from 'styled-components';

export const HeaderStyles = styled(Stack)`
  margin: 10px 0 10px 0;

  & img {
    background-color: red;
    padding: 10px;
    height: auto;
    max-height: 20px;
    border-radius: 10px;
  }
`;

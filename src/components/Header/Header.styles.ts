import { Stack } from '@mui/material';

import { styled } from 'styled-components';

export const HeaderStyles = styled(Stack)`
  margin: 1rem 0 1rem 0;

  & img {
    background-color: red;
    padding: 0.5rem;
    height: auto;
    max-height: 1rem;
    border-radius: 0.5rem;
  }
`;

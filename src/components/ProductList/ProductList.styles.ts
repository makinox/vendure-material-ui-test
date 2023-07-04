import { appBreakpoints, getBreakpoint } from '@/utils';
import { styled } from 'styled-components';
import { Box } from '@mui/material';

export const ProductListStyled = styled(Box)`
  gap: 40px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${getBreakpoint(appBreakpoints.sm)} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${getBreakpoint(appBreakpoints.md)} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${getBreakpoint(appBreakpoints.lg)} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  ${getBreakpoint(appBreakpoints.xl)} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

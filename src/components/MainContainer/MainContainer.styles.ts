import { appBreakpoints, breakpointValues, getBreakpoint } from '@/utils';
import { styled } from 'styled-components';

export const MainContainerStyles = styled.main`
  margin: 0 auto;
  width: 100%;

  ${getBreakpoint(appBreakpoints.sm)} {
    max-width: ${breakpointValues.sm};
  }
  ${getBreakpoint(appBreakpoints.md)} {
    max-width: ${breakpointValues.md};
  }
  ${getBreakpoint(appBreakpoints.lg)} {
    max-width: ${breakpointValues.lg};
  }
  ${getBreakpoint(appBreakpoints.xl)} {
    max-width: ${breakpointValues.xl};
  }
  ${getBreakpoint(appBreakpoints.xxl)} {
    max-width: ${breakpointValues.xxl};
  }
`;

import { SCREEN_MEDIA_QUERY } from '@/constants';

export enum breakpointValues {
  sm = '640px',
  md = '768px',
  lg = '1024px',
  xl = '1280px',
  xxl = '1536px',
}

export enum appBreakpoints {
  sm,
  md,
  lg,
  xl,
  xxl,
}

export function getBreakpoint(breakpoint: appBreakpoints) {
  switch (breakpoint) {
    case appBreakpoints.sm:
      return SCREEN_MEDIA_QUERY.replace('XXXXX', breakpointValues.sm);
    case appBreakpoints.md:
      return SCREEN_MEDIA_QUERY.replace('XXXXX', breakpointValues.md);
    case appBreakpoints.lg:
      return SCREEN_MEDIA_QUERY.replace('XXXXX', breakpointValues.lg);
    case appBreakpoints.xl:
      return SCREEN_MEDIA_QUERY.replace('XXXXX', breakpointValues.xl);
    case appBreakpoints.xxl:
      return SCREEN_MEDIA_QUERY.replace('XXXXX', breakpointValues.xxl);
  }
}

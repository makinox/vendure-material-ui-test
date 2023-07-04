import { DEFAULT_CURRENCY_CODE } from '@/constants';

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: DEFAULT_CURRENCY_CODE,
  }).format(value / 100);
}

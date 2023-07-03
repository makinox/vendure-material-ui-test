export * from './apollo';
export * from './reportWebVitals';
export * from './styles';

export function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value / 100);
}

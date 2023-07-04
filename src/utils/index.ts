export * from './apollo';
export * from './reportWebVitals';

export function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value / 100);
}

export function serializeValue<T>(value: T): string {
  if (!value) return '';
  return JSON.stringify(value);
}

export function unSerializeValue(value: string | null) {
  if (!value) return '';
  return JSON.parse(value);
}

export function deepCopy<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

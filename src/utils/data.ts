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

export function generateRandomId(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const timestamp = new Date().getTime();

  let randomId = '';

  while (randomId.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return `${timestamp}_${randomId}`;
}

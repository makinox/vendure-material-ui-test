import { serializeValue, unSerializeValue } from '@/utils';
import { useEffect, useState } from 'react';

export default function useStateWithStorage<T>(key: string, defaultValue: T) {
  const initialValue =
    unSerializeValue(localStorage.getItem(key)) || defaultValue;

  const [storage, setStorage] = useState<T>(initialValue);

  // Sync local storage
  useEffect(() => {
    localStorage.setItem(key, serializeValue(storage));
  }, [key, storage]);

  return { storage, setStorage };
}

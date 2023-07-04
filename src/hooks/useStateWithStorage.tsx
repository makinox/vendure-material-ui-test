import { serializeValue, unSerializeValue } from '@/utils';
import { useState } from 'react';

export default function useStateWithStorage<T>(key: string, defaultValue: T) {
  const initialValue =
    unSerializeValue(localStorage.getItem(key)) || defaultValue;

  const [storage, setStorage] = useState<T>(initialValue);

  function updateStorage(value: T) {
    setStorage(value);
    localStorage.setItem(key, serializeValue(value));
  }

  function resetStorage(value: T) {
    const resetValue = value;
    setStorage(value);
    localStorage.setItem(key, serializeValue(resetValue));
  }

  return { storage, updateStorage, resetStorage };
}

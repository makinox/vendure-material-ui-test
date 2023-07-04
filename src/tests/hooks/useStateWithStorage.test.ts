import { renderHook, act } from '@testing-library/react';
import useStateWithStorage from '@/hooks/useStateWithStorage';

describe('Testing useStateWithStorage hook', () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  test('should initialize storage with default value when key does not exist in local storage', () => {
    const defaultValue = 42;
    const { result } = renderHook(() =>
      useStateWithStorage('testKey', defaultValue)
    );

    expect(result.current.storage).toBe(defaultValue);
  });

  test('should initialize storage with unserialized value when key exists in local storage', () => {
    const existingValue = JSON.stringify({ foo: 'bar' });
    localStorage.setItem('testKey', existingValue);

    const defaultValue = { hello: 'world' };
    const { result } = renderHook(() =>
      useStateWithStorage('testKey', defaultValue)
    );

    expect(result.current.storage).toEqual(JSON.parse(existingValue));
  });

  test('should update storage when setStorage function is called', () => {
    const defaultValue = 0;
    const { result } = renderHook(() =>
      useStateWithStorage('testKey', defaultValue)
    );

    const newValue = 10;
    act(() => {
      result.current.setStorage(newValue);
    });

    expect(result.current.storage).toBe(newValue);
  });

  test('should update local storage when storage is updated', () => {
    const defaultValue = '';
    const { result } = renderHook(() =>
      useStateWithStorage('testKey', defaultValue)
    );

    const newValue = 'Hello, World!';
    act(() => {
      result.current.setStorage(newValue);
    });

    expect(localStorage.getItem('testKey')).toBe(JSON.stringify(newValue));
  });
});

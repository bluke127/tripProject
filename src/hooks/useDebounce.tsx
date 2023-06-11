import { useCallback, useEffect } from "react";

export default function useDebounce(func, delay, deps) {
  const callback = useCallback(func, deps);

  useEffect(() => {
    console.log(func, delay, deps);
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
}

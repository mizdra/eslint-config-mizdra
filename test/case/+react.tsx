import { useState, useCallback } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClick = useCallback(() => setCount(count + 1), []); // eslint-plugin-react-hooks が機能している
  // eslint-disable-next-line react/button-has-type
  return <button onClick={onClick}>{count}</button>; // eslint-plugin-react が機能している
}

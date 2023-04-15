// eslint-disable-next-line import/no-unresolved
import { useState, useCallback } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClick = useCallback(() => setCount(count + 1), []); // eslint-plugin-react-hooks が機能している
  return <button onClick={onClick}>{count}</button>;
}
export function App() {
  // eslint-disable-next-line react/self-closing-comp
  return <Counter></Counter>; // eslint-plugin-react が機能している
}

'use client';
import { useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState(0);
  return (
    <div style={{padding: '50px', textAlign: 'center'}}>
      <h1>Test Page - Click Counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background: '#D4A853', color: 'white', border: 'none', borderRadius: '8px'}}
      >
        Click Me (+1)
      </button>
    </div>
  );
}

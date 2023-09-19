import { useState,lazy, Suspense } from 'react';
const Lazy = lazy(()=> import('./Lazy'));

function App() {
  const [,setValue] = useState(false);

  return (
    <Suspense>
      <Lazy/>
      <button onClick={()=> setValue(value=>!value)}>Refresh</button>
    </Suspense>
  )
}

export default App

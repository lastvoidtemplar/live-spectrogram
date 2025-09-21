import React from 'react';
import { initWasm } from './lib/wasm-loader';

function App() {
const [message, setMessage] = React.useState("Loading...");

  React.useEffect(() => {
    (async () => {
      const greet = await initWasm();
      setMessage(greet("React Developer"));
    })();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{message}</h1>
    </div>
  );
}

export default App

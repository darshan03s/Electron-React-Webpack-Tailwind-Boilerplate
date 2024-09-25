import React, { useEffect, useState } from 'react';
import Spinner from './components/Spinner.jsx';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [testText, setTestText] = useState('');

  useEffect(() => {
    window.test.test();
    const fetchData = async () => {
      setLoading(true);
      const res = await window.test.testFunction();
      setTestText(res);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div id="body" className="bg-zinc-950  p-4 text-white flex justify-center items-center flex-col gap-4">
      <h1>Hello from Electron!</h1>
      {loading ? <Spinner /> : <p>{testText}</p>}
    </div>
  );
};

export default App;

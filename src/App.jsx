import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;

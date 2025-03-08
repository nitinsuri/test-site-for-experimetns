import React from 'react';
import Header from './Components/Header/Header';
import LeftNav from './Components/LeftNav/LeftNav';
import DynamicGrid from './Components/DynamicGrid/DynamicGrid';
import ProgressiveWeights from './Components/ProgressiveWeights/ProgressiveWeights';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <LeftNav />
        <section>
          <DynamicGrid />
          <ProgressiveWeights />
        </section>
      </main>
    </>
  );
}

export default App;

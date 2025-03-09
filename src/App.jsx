import React from 'react';
import { LeftNavStatusContext } from './Contexts/LeftNavContext/LeftNavContext';
import Header from './Components/Header/Header';
import LeftNav from './Components/LeftNav/LeftNav';
import DynamicGrid from './Components/DynamicGrid/DynamicGrid';
import ProgressiveWeights from './Components/ProgressiveWeights/ProgressiveWeights';
import './App.scss';

function App() {
  LeftNavStatusContext;
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

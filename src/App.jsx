import React, {useContext} from 'react';
import { LeftNavStatusContext } from './Contexts/LeftNavContext/LeftNavContext';
import Header from './Components/Header/Header';
import LeftNav from './Components/LeftNav/LeftNav';
import DynamicGrid from './Components/DynamicGrid/DynamicGrid';
import ProgressiveWeights from './Components/ProgressiveWeights/ProgressiveWeights';
import './App.scss';

function App() {
  const [active]  =  useContext(LeftNavStatusContext);;
  return (
    <>
      <Header />
      <main className={active ? 'active': null}>
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

import { createContext, useState } from 'react';
export const LeftNavStatusContext = createContext(true);

const LeftNavStatusProvider = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <LeftNavStatusContext.Provider value={[active, setActive]}>
      {children}
    </LeftNavStatusContext.Provider>
  );
};

export default LeftNavStatusProvider;

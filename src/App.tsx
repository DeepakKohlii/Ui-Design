import React from 'react';
import AppRoutes from './routes/AppRoutes';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
};

export default App;

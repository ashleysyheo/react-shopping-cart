import { Outlet } from 'react-router-dom';

import Header from './components/common/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;

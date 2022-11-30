import 'bootstrap/dist/css/bootstrap.css'
import {Outlet} from 'react-router-dom';
import MainNavigation from './components/MainNavigation/MainNavigation';

function App() {
  return (
      <>
          <MainNavigation/>
          <Outlet/>
      </>
  );
}

export default App;

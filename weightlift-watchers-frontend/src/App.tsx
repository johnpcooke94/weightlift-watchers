import 'bootstrap/dist/css/bootstrap.css'
import {Outlet} from 'react-router-dom';
import MainNavigation from './components/MainNavigation/MainNavigation';
import {Container} from 'react-bootstrap';

function App() {
  return (
      <>
          <MainNavigation/>
          <Container fluid style={{padding: '24px 12px'}}>
              <Outlet/>
          </Container>
      </>
  );
}

export default App;

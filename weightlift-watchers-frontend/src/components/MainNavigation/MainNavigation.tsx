import {Container, Nav, Navbar, NavbarBrand, NavItem} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import './MainNavigation.css';
import {Link} from 'react-router-dom';


const MainNavigation = () => {
    return (
        <Container fluid>
            <Navbar className='main-nav'>
                <NavbarBrand>Weightlift Watchers</NavbarBrand>
                <NavbarCollapse className='justify-content-end'>
                    <Nav>
                        <NavItem>
                            <Link to={'/exercises'}>Exercises</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/createExercise'}>New Exercise</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/login'}>Login/Register</Link>
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </Container>

    );
};

export default MainNavigation;

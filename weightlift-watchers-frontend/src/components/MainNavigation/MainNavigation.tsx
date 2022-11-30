import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import './MainNavigation.css';
import {Link} from 'react-router-dom';


const MainNavigation = () => {
    return (
        <Container fluid style={{padding: 0}}>
            <Navbar className='main-nav'>
                <NavbarBrand>Weightlift Watchers</NavbarBrand>
                <NavbarCollapse className='justify-content-end'>
                    <Nav>
                        <NavItem>
                            <NavLink>
                                <Link className='nav-links' to={'/exercises'}>Exercises</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link className='nav-links' to={'/createExercise'}>New Exercise</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link className='nav-links' to={'/login'}>Login/Register</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </Container>

    );
};

export default MainNavigation;

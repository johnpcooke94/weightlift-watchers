import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import './MainNavigation.css';

// TODO: should probably refactor this to use react router at some point *COUGH HACK*
const MainNavigation = () => {
    return (
        <Navbar className='main-nav'>
            <NavbarBrand>Weightlift Watchers</NavbarBrand>
            <NavbarCollapse className='justify-content-end'>
                <Nav>
                    <NavItem>
                        <NavLink>Exercises</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>New Exercise</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Login/Register</NavLink>
                    </NavItem>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
};

export default MainNavigation;

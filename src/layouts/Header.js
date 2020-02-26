import React from 'react';
import "../styles/Header.css";
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo_eo from '../images/company_logo_eo.png';

const Header = (props) => {
    const {handlerUserLogout} = props
    if(props.loggedInStatus){
        return (
            <> 
                <Navbar expand="lg">
                    <Navbar.Brand><Nav.Link as={Link} to='/'><img src={logo_eo} alt="Company logo" /></Nav.Link></Navbar.Brand>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        {props.user.adminRole ?
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/users">Lista pracowników</Nav.Link>
                            </Nav>
                            :
                            <></>
                        }
                        
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Witaj: {props.user.firstName}
                            </Navbar.Text>
                            <Nav>
                                <Nav.Link onClick={handlerUserLogout} as={Link} to='/'>Wyloguj</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }else{
        return (
            <>
                <Navbar expand="lg">
                    <Navbar.Brand><img src={logo_eo} alt="Company logo" /></Navbar.Brand>
                </Navbar>
            </>
        )
    }
}

export default Header;
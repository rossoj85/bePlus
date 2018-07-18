import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { configureAnchors } from 'react-scrollable-anchor';


export default (props)=>{
    console.log('inside')
    console.log('Navbar Props', props)
    let language = props.language

    configureAnchors({offset: -60, scrollDuration: 600})
    return(
        <Navbar inverse collapseOnSelect fixedTop id='navbar'>
  <Navbar.Header>
    <Navbar.Brand>
      <LinkContainer to='/'><a>Be<small>+</small></a></LinkContainer>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
    

  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href='#about'>About Us</NavItem>
      <NavItem eventKey={2} href='#ourWork'>Our Work</NavItem>
      <NavItem eventKey={1} href='#services' >Services</NavItem>
      <NavItem eventKey={2} href='#contact'>Contact</NavItem>
      <NavItem>
        {
          language==='esp'?
          <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> English Site</p>
          :
          <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> Sitio en Español</p>
        }
    </NavItem>
    </Nav>
  </Navbar.Collapse>
  {
  // <div id='lang'>
  //   {
  //     language==='esp'?
  //     <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> English Site</p>
  //     :
  //     <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> Sitio en Español</p>
  //   }
  // </div>
  }
</Navbar>
    )
} 
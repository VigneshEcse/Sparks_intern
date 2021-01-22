import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './Amttrans';



const Navigation = () => {
    return (
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/">
    <font color={'white'}>OUR BANK</font>
  </ReactBootStrap.Navbar.Brand>

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">

      <ReactBootStrap.Nav.Link href="/Viewall">
        <font color={'white'}>View All</font>
      </ReactBootStrap.Nav.Link>

      <ReactBootStrap.Nav.Link href="/Viewone">
        <font color={'white'}>View One</font>
      </ReactBootStrap.Nav.Link>

      <ReactBootStrap.NavDropdown  title="Make Transaction" id="collasible-nav-dropdown">
        <font color={'#fff'}></font>

        <ReactBootStrap.NavDropdown.Item href="/Amttrans">
          <font color={'black'}>Amount Transfer</font>
        </ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Item href="/History">
          <font color={'black'}>Transfer History</font
        ></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/balance">
          <font color={'black'}>Balance</font>
        </ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider />

        {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item> */}

      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav>
      {/* <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link> */}
      {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link> */}
    </ReactBootStrap.Nav>
  <h4  style={{ color: '#FFFFFF' }}><strong>WELCOME</strong></h4>


  </ReactBootStrap.Navbar.Collapse>


</ReactBootStrap.Navbar>
          
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink> */}
      </div>
    );
}

export default Navigation;
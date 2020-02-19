import React, { Component } from "react";
import { Navbar, Nav, NavItem} from "react-bootstrap";
import {Link } from "react-router-dom";
import "./App.css";
import Routes from "./Routes.js";

export default class App extends Component 
{
  render(){
    return (
    <div className= "App container">
      <Navbar bg="light" expand ="lg">
       <Navbar.Brand>
         <Link to="/">Fisher Bookstore</Link>
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/authors">Authors</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
    );
  }
}

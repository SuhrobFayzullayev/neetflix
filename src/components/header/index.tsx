import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="sm" className="mt-2" variant="dark">
      <Container fluid>
        <Link className={`${styles.logo} text-danger`} href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <Navbar.Toggle
          className="p-0 color-white shadow-none border-0"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {Array("MOVIES", "SERIES", "KIDS").map((v, i) => (
              <Link
                className={`${styles.navigationMenu} nav-link`}
                href="#"
                key={i}
              >
                {v}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };

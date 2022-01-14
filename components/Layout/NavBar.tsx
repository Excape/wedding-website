import link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const NavLink = styled.a`
  display: block;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
  :hover {
    color: #b9a37e;
  }
`;

const Nav = styled.ul`
  @media (max-width: 768px) {
    display: ${(props) => (props.visible ? "flex" : "none")};
  }
`;

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const onLinkClick = (event) => {
      toggleMenu();
      event.preventDefault()
      const targetAnchor = event.target.getAttribute('href')
      document.querySelector(targetAnchor).scrollIntoView({
        behavior: 'smooth'
    });
  }
  const linkProps = { onClick: onLinkClick };
  return (
    <nav className="fixed z-50 w-screen">
      <div className="text-center bg-white p-4 font-bold md:hidden">
        <a href="#" className="hover:text-map-beige" onClick={toggleMenu}>
          MENU
        </a>
      </div>
      <Nav
        visible={menuIsOpen}
        className="h-screen bg-white flex flex-col items-center
             md:h-auto md:flex-row md:justify-around font-title-sans"
      >
        <li>
          <NavLink href="#venues" {...linkProps}>
            Venues
          </NavLink>
        </li>
        <li>
          <NavLink href="#schedule" {...linkProps}>
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink href="#travel" {...linkProps}>
            Travel
          </NavLink>
        </li>
        <li>
          <NavLink href="#lodging" {...linkProps}>
            Lodging
          </NavLink>
        </li>
        <li>
          <NavLink href="#ourstory" {...linkProps}>
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink href="#activities" {...linkProps}>
            Activites
          </NavLink>
        </li>
        <li>
          <NavLink href="#rsvp" {...linkProps}>
            RSVP
          </NavLink>
        </li>
        <li>
          <NavLink href="#registry" {...linkProps}>
            Registry
          </NavLink>
        </li>
        <li>
          <NavLink href="#faq" {...linkProps}>
            FAQ
          </NavLink>
        </li>
      </Nav>
    </nav>
  );
};

export default NavBar;

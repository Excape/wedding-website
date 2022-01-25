import link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { useTranslations } from "use-intl";

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
  @media (max-width: 1023px) {
    display: ${(props) => (props.visible ? "flex" : "none")};
  }
`;

const NavBar = () => {
  const t = useTranslations("Nav");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const onLinkClick = (event) => {
    toggleMenu();
    event.preventDefault();
    const targetAnchor = event.target.getAttribute("href");
    document.querySelector(targetAnchor).scrollIntoView({
      behavior: "smooth",
    });
  };
  const linkProps = { onClick: onLinkClick };
  return (
    <nav className="fixed z-50 w-screen">
      <div className="text-center bg-white p-4 font-bold lg:hidden">
        <a href="#" className="hover:text-map-beige" onClick={toggleMenu}>
          MENU
        </a>
      </div>
      <Nav
        visible={menuIsOpen}
        className="h-screen bg-white flex flex-col items-center
             lg:h-auto lg:flex-row lg:justify-around font-title-sans"
      >
        <li>
          <NavLink href="#venues" {...linkProps}>
            {t("venues")}
          </NavLink>
        </li>
        <li>
          <NavLink href="#schedule" {...linkProps}>
            {t("schedule")}
          </NavLink>
        </li>
        <li>
          <NavLink href="#travel" {...linkProps}>
            {t("travel")}
          </NavLink>
        </li>
        <li>
          <NavLink href="#lodging" {...linkProps}>
            {t("lodging")}
          </NavLink>
        </li>
        {/* <li>
          <NavLink href="#ourstory" {...linkProps}>
            {t("ourstory")}
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink href="#thingstodo" {...linkProps}>
            {t("thingstodo")}
          </NavLink>
        </li> */}
        <li>
          <NavLink href="#rsvp" {...linkProps}>
            {t("rsvp")}
          </NavLink>
        </li>
        <li>
          <NavLink href="#registry" {...linkProps}>
            {t("registry")}
          </NavLink>
        </li>
        <li>
          <NavLink href="#faq" {...linkProps}>
            {t("faq")}
          </NavLink>
        </li>
      </Nav>
    </nav>
  );
};

export default NavBar;

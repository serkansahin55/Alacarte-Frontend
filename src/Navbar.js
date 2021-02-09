import React from "react";

function NavBar() {
  const links = ["Home", "Menu", "Reviews", "About Us"];

  const anchors = links.map((link) => (
    <a key={link} href={link}>
      {link}
    </a>
  ));
  return (
    <nav>
        <h1>AlaCarte Restaurant</h1>
      {anchors}
    </nav>
  )
}

export default NavBar;
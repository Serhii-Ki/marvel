import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img
            src="https://seeklogo.com/images/D/dbs-bank-logo-8241F42CBA-seeklogo.com.png"
            alt="logo"
          />
        </Link>
        <div>
          <span>notification</span>
          <span>exit</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

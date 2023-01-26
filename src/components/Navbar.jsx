import React from "react";
import Link from "@mui/material/Link";

function Navbar() {
  return (
    <nav className="flex  flex-wrap gap-y-2 justify-between p-5 border border-solid">
      <Link href="#" color="inherit">
        Technology
      </Link>
      <Link href="#" color="inherit">
        Design
      </Link>
      <Link href="#" color="inherit">
        Culture
      </Link>
      <Link href="#" color="inherit">
        Business
      </Link>
      <Link href="#" color="inherit">
        Politics
      </Link>
      <Link href="#" color="inherit">
        Opinion
      </Link>
      <Link href="#" color="inherit">
        Science
      </Link>
      <Link href="#" color="inherit">
        Health
      </Link>
      <Link href="#" color="inherit">
        Style
      </Link>
      <Link href="#" color="inherit">
        Travel
      </Link>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { styles } from "./style";

const Navbar = () => {
  return (
    <div style={{ ...styles.header }}>
      <label style={{ ...styles.logo_font }}>Playerz Pot</label>
    </div>
  );
};

export default Navbar;

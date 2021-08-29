import React from "react";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <div mt={8}>
      <Button variant="contained" color="secondary" mt={50}>
        HTML/CSS
      </Button>
      <Button variant="contained" color="secondary" mr={8}>
        JS
      </Button>
      <Button variant="contained" color="secondary" ml={8}>
        React
      </Button>
    </div>
  );
};

export default Navbar;

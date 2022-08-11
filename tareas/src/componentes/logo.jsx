import React from "react";
import freecodecampLogo from "../imagenes/freecodecampLogo.png";

function Logo() {
  return (
    <>
      <div className="freecodecamp-logo-contenedor">
        <img src={freecodecampLogo} className="freecodecamp-logo" />
      </div>
    </>
  );
}

export default Logo;
import * as React from "react";
import IconLogut from "../../../iconos/Icons JSX/IconLogut";
import LeftBarButton from "./LeftBarButton";
import { logoLeftBar } from "../../../Static/imageLinks";

const LeftBar = (props) => {
  const {
    //rol,
    children,
    onLogout,
    //optionActive
  } = props;

  //const rol = usuario?.ROL?.DENOMINACION || "";
  const handleCerrarSesion = () => {
    onLogout?.();
  };
  //const handleVerMaestros = () => {};
  return (
    <div className="quantum-left-bar">
      <div className="top-options">
        <div className="side-bar-image-container">
          <img src={logoLeftBar} width="85%" alt="logo-kamui-menu" />
        </div>
        {children}
      </div>
      <div className="bottom-options">
        <LeftBarButton onClick={handleCerrarSesion}>
          <IconLogut color="white" size={45} />
          <div> Cerrar</div> <div>Sesión</div>{" "}
        </LeftBarButton>
      </div>
    </div>
  );
};
export default LeftBar;

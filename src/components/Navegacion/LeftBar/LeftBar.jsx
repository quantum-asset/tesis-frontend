import * as React from "react";
//import "./LeftBar.scss"
import logo from "../../../Static/kamui-white.png";
import IconLogut from "../../../iconos/Icons JSX/IconLogut";
import LeftBarButton from "./LeftBarButton";
import { useContext } from "react";
import { UserContext } from "../../../globals/contexts/userContext";
import IconDashBoard from "../../../Icons/IconDashBoard";
import IconAssets from "../../../Icons/IconAssets";
import IconControl from "../../../Icons/IconControl";
import IconMaestros from "../../../Icons/IconMaestros";
import IconConfig from "../../../Icons/IconConfig";
import IconAsset2 from "../../../iconos/Icons JSX/IconAsset2";
import IconNotification from "../../../iconos/Icons JSX/IconNotification";
const LeftBar = (props) => {
  const { rol, optionActive } = props;
  const [usuario, setUserContext] = useContext(UserContext);
  //const rol = usuario?.ROL?.DENOMINACION || "";
  const handleCerrarSesion = () => {
    setUserContext({ type: "LOGOUT" });
  };
  const handleVerMaestros = () => {};
  return (
    <div className="quantum-left-bar">
      <div className="top-options">
        <div className="side-bar-image-container">
          <img src={logo} width="85%" alt="logo-kamui-menu" />
        </div>
        {rol === "eca" && (
          <React.Fragment>
            <LeftBarButton onClick={handleVerMaestros} active={true}>
              <IconDashBoard color={"white"} size={45} />
              reportes
            </LeftBarButton>
            <LeftBarButton onClick={handleVerMaestros} active={false}>
              <IconControl color={"white"} size={45} />
              Inventario
            </LeftBarButton>
            <LeftBarButton onClick={handleVerMaestros} active={false}>
              <IconMaestros color={"white"} size={45} />
              Maestros
            </LeftBarButton>
            <LeftBarButton onClick={handleVerMaestros} active={false}>
              <IconConfig color={"white"} size={45} />
              Ajustes
            </LeftBarButton>
          </React.Fragment>
        )}
        {rol === "ecal" && (
          <React.Fragment>
            <LeftBarButton onClick={handleVerMaestros} active={true}>
              <IconDashBoard color={"white"} size={45} />
              reportes
            </LeftBarButton>
            <LeftBarButton onClick={handleVerMaestros} active={true}>
              <IconAsset2 color={"#bf8f0b"} size={48} />
              activos
            </LeftBarButton>
            <LeftBarButton onClick={handleVerMaestros} active={true}>
              <IconNotification color={"#bf8f0b"} size={48} />
              Alertas
            </LeftBarButton>
          </React.Fragment>
        )}
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

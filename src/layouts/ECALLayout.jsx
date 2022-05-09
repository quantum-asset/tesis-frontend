import * as React from "react";
import { Outlet as Children, useNavigate } from "react-router";
import LeftBar from "../components/Navegacion/LeftBar/LeftBar";
import LeftBarButton from "../components/Navegacion/LeftBar/LeftBarButton";
import NavBarElevate from "../components/Navegacion/Navbar/NavBar";
import { UserContext, usuarioIsAuth } from "../globals/contexts/userContext";
import IconAsset2 from "../iconos/Icons JSX/IconAsset2";
import IconNotification from "../iconos/Icons JSX/IconNotification";
import IconDashBoard from "../Icons/IconDashBoard";
import "./ECASLayout.scss";
const ECALLayout = (props) => {
  let navigate = useNavigate();
  const [usuarioContext, setUserContext] = React.useContext(UserContext);
  //la opcion activa del usuario
  const [optionActive, setOptionActive] = React.useState(2);

  React.useEffect(() => {
    console.log("Cambio en user", usuarioContext);
    if (!usuarioIsAuth(usuarioContext)) {
      console.log("No autenticado", usuarioContext);
      navigate("/");
    }
    // eslint-disable-next-line
  }, [usuarioContext]);
  const handleChangeOption = (option = 0) => {
    setOptionActive(option);
  };
  const handleCerrarSesion = () => {
    setUserContext({ type: "LOGOUT" });
  };

  const setColor = (indice) => {
    return isActive(indice) ? "#AF801B" : "white";
  };
  const setTitle = (optionActive) => {
    switch (optionActive) {
      case 0:
        return "Reportes";
      case 1:
        return "Gestión de activos fijos";
      case 2:
        return "Alertas de necesidad de ags RFID y Toma de inventario";

      default:
        return "";
    }
  };
  const isActive = (indice) => {
    return indice === optionActive;
  };

  /// cambios de vista
  const handleVerReportes = () => {
    setOptionActive(0);
  };
  const handleVerActivos = () => {
    setOptionActive(1);
  };
  const handleVerAlertas = () => {
    setOptionActive(2);
  };

  if (!usuarioIsAuth(usuarioContext)) {
    return <></>;
  } else
    return (
      <div className="quantum-main-container-eca">
        <LeftBar
          onLogout={handleCerrarSesion}
          rol="eca"
          optionActive={optionActive}
          onChangeOption={handleChangeOption}
        >
          <React.Fragment>
            <LeftBarButton onClick={handleVerReportes} active={isActive(0)}>
              <IconDashBoard color={setColor(0)} size={45} />
              reportes
            </LeftBarButton>
            <LeftBarButton onClick={handleVerActivos} active={isActive(1)}>
              <IconAsset2 color={setColor(1)} size={45} />
              activos
            </LeftBarButton>
            <LeftBarButton onClick={handleVerAlertas} active={isActive(2)}>
              <IconNotification color={setColor(2)} size={45} />
              Alertas
            </LeftBarButton>
          </React.Fragment>
        </LeftBar>
        <div className="quantum-main-body">
          <NavBarElevate title={setTitle(optionActive)} />
          <Children />
        </div>
      </div>
    );
};
export default ECALLayout;

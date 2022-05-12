import { IconButton } from "@mui/material";
import * as React from "react";
import { Outlet as Children, useNavigate } from "react-router";
import LeftBar from "../components/Navegacion/LeftBar/LeftBar";
import LeftBarButton from "../components/Navegacion/LeftBar/LeftBarButton";
import MobileBar from "../components/Navegacion/MobileBar/MobileBar";
import MobileBarButton from "../components/Navegacion/MobileBar/MobileBarButton";
import NavBarElevate from "../components/Navegacion/Navbar/NavBar";
import { UserContext, usuarioIsAuth } from "../globals/contexts/userContext";
import IconConfig from "../Icons/IconConfig";
import IconControl from "../Icons/IconControl";
import IconDashBoard from "../Icons/IconDashBoard";
import IconMaestros from "../Icons/IconMaestros";
import MenuIcon from "@mui/icons-material/Menu";

import "./ECALayout2.scss";
import { logoKamuiHorizontal } from "../Static/imageLinks";
const ECALayout2 = (props) => {
  const [mobileMenuOpen, setOpenMobileMenuOpen] = React.useState(false);
  const handleMobileMenuOpen = () => {
    setOpenMobileMenuOpen(!mobileMenuOpen);
  };
  let navigate = useNavigate();
  const [usuarioContext, setUserContext] = React.useContext(UserContext);
  //la opcion activa del usuario
  const [optionActive, setOptionActive] = React.useState(2);

  React.useEffect(() => {
    navigate(`/eca${setRoute(optionActive)}`);
  }, [optionActive]);
  React.useEffect(() => {
    console.log("Cambio en user", usuarioContext);
    if (!usuarioIsAuth(usuarioContext)) {
      console.log("No autenticado", usuarioContext);
      navigate("/");
    }
    /* else{
      navigate(`/eca${setRoute(optionActive)}`);
    } */
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
  const setColorMobile = (indice) => {
    return isActive(indice) ? "#AF801B" : "#000000";
  };
  const setTitle = (optionActive) => {
    switch (optionActive) {
      case 0:
        return "Reportes";
      case 1:
        return "Toma de inventario";
      case 2:
        return "Gestión de datos maestros";
      case 3:
        return "Ajustes del sistema";
      default:
        return "";
    }
  };
  const setRoute = (optionActive) => {
    switch (optionActive) {
      case 0:
        return "/reportes";
      case 1:
        return "/toma-inventario";
      case 2:
        return "/maestros";
      case 3:
        return "/configuracion";
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
  const handleVerInventario = () => {
    setOptionActive(1);
  };
  const handleVerMaestros = () => {
    setOptionActive(2);
  };
  const handleVerAjustes = () => {
    setOptionActive(3);
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
            <LeftBarButton onClick={handleVerInventario} active={isActive(1)}>
              <IconControl color={setColor(1)} size={45} />
              Inventario
            </LeftBarButton>
            <LeftBarButton onClick={handleVerMaestros} active={isActive(2)}>
              <IconMaestros color={setColor(2)} size={45} />
              Maestros
            </LeftBarButton>
            <LeftBarButton onClick={handleVerAjustes} active={isActive(3)}>
              <IconConfig color={setColor(3)} size={45} />
              Ajustes
            </LeftBarButton>
          </React.Fragment>
        </LeftBar>
        {mobileMenuOpen && (
          <MobileBar active={mobileMenuOpen} onClose={handleMobileMenuOpen}>
            <div className="mobile-logo-container">
              <div className="navbar-menu-icon">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMobileMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <img src={logoKamuiHorizontal} height="50px" />
            </div>
            <MobileBarButton onClick={handleVerReportes} active={isActive(3)}>
              <IconDashBoard color={setColorMobile(0)} size={45} />
              reportes
            </MobileBarButton>
            <MobileBarButton onClick={handleVerInventario} active={isActive(1)}>
              <IconControl color={setColorMobile(1)} size={45} />
              Inventario
            </MobileBarButton>
            <MobileBarButton onClick={handleVerMaestros} active={isActive(2)}>
              <IconMaestros color={setColorMobile(2)} size={45} />
              Maestros
            </MobileBarButton>
            <MobileBarButton onClick={handleVerAjustes} active={isActive(3)}>
              <IconConfig color={setColorMobile(3)} size={45} />
              Ajustes
            </MobileBarButton>
          </MobileBar>
        )}
        <div className="quantum-main-body">
          <NavBarElevate
            title={setTitle(optionActive)}
            onMobileMenuOpen={handleMobileMenuOpen}
          />
          <Children />
        </div>
      </div>
    );
};
export default ECALayout2;

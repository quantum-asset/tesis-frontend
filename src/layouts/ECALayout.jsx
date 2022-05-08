import * as React from "react";
import { Outlet, useNavigate } from "react-router";
import LeftBar from "../components/Navegacion/LeftBar/LeftBar";
import NavBarElevate from "../components/Navegacion/Navbar/NavBar";
import { UserContext, usuarioIsAuth } from "../globals/contexts/userContext";
import "./ECASLayout.scss";
const ECALayout = (props) => {
  let navigate = useNavigate();
  const [usuarioContext] = React.useContext(UserContext);
  const [optionActive, setOptionActive] = React.useState(0);
  React.useEffect(() => {
    console.log("Cambio en user", usuarioContext);
    if (!usuarioIsAuth(usuarioContext)) {
      console.log("No autenticado", usuarioContext);
      navigate("/");
    }
  }, [usuarioContext]);
  const handleChangeOption = (option = 0) => {
    setOptionActive(option);
  };
  if (!usuarioIsAuth(usuarioContext)) {
    return <></>;
  } else
    return (
      <div className="quantum-main-container-eca">
        <LeftBar
          rol="eca"
          optionActive={optionActive}
          onChangeOption={handleChangeOption}
        />
        <div className="quantum-main-body">
          <NavBarElevate title="Gestion de datos maestros" />
          <Outlet />
        </div>
      </div>
    );
};
export default ECALayout;

import * as React from "react";
import { useNavigate, useParams } from "react-router";
import {
  UserContext,
  usuarioIsAuth,
} from "../../../globals/contexts/userContext";

const NuevaContrasenia = (props) => {
  let navigate = useNavigate();
  let params = useParams();
  const { recoverId } = params;
  console.log("recover ID", recoverId);
  const [usuarioContext] = React.useContext(UserContext);
  React.useEffect(() => {
    console.log(usuarioContext);
    if (usuarioIsAuth(usuarioContext)) {
      const rolActual = usuarioContext.ROL.DENOMINACION.toLowerCase();
      if (rolActual.includes("locacion")) {
        console.log("usuario auth redireccionando a /ecal", rolActual);
        navigate(`/ecal`);
      } else {
        console.log("usuario auth redireccionando a /eca", rolActual);
        navigate(`/eca`);
      }
    } else {
      if (!recoverId) {
        navigate(`/recuperar-contrasenia`);
      }
    }
  }, [usuarioContext, recoverId]);
  if (usuarioIsAuth(usuarioContext)) {
    return <React.Fragment></React.Fragment>;
  } else return <div>hola</div>;
};
export default NuevaContrasenia;

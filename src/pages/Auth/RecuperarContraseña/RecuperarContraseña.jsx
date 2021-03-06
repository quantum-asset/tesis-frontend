import * as React from "react";
import { Button } from "@mui/material";
import FormInputText from "../../../components/Formulario/FormInputText";
import "./RecuperarContraseña.scss";

import { useNavigate } from "react-router";
import { AuthController } from "../../../Controller/AuthController";
import {
  UserContext,
  usuarioIsAuth,
} from "../../../globals/contexts/userContext";
import { logoKamuiHorizontal } from "../../../Static/imageLinks";

const RecuperarContraseña = (props) => {
  let navigate = useNavigate();

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
    }
    // eslint-disable-next-line
  }, [usuarioContext]);

  const [correoRecuperacion, setCorreoRecuperacion] =
    React.useState("griskyh@gmail.com");
  const handleChangeCorreo = (e) => {
    setCorreoRecuperacion(e.target.value);
  };

  const handleEnviarCodigo = async () => {
    // alert("codigo enviado");
    const {
      success,
      message,
      //  , data
    } = await AuthController.requestRecoverPassword(correoRecuperacion);
    if (success) {
      //caso exitoso
      alert(message);
    } else {
      //error
      alert("Error: " + message);
    }
  };

  if (usuarioIsAuth(usuarioContext)) {
    return <React.Fragment></React.Fragment>;
  } else
    return (
      <div className="main-container-recover">
        <div className="form-container">
          <div className="logo-container">
            <img src={logoKamuiHorizontal} width="50%" alt="logo-login" />
          </div>

          <React.Fragment>
            <h3>Recuperar contraseña</h3>
            <p>Ingrese el correo electrónico asociado a su cuenta</p>

            <FormInputText
              name="CORREO"
              onChange={handleChangeCorreo}
              value={correoRecuperacion}
              label="Correo"
              // placeholder="Correo"
              type="email"
            />
            <br />
            <br />
            <Button
              style={{ margin: "18px 0", textTransform: "capitalize" }}
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleEnviarCodigo}
            >
              Enviar código de recuperación
            </Button>
            <button
              className="anchor"
              style={{
                //alignSelf: "flex-end",
                margin: "10px 0",
              }}
              //onClick={handleOpenDialog}
              onClick={() => navigate("/")}
            >
              Iniciar Sesion
            </button>
          </React.Fragment>
        </div>
      </div>
    );
};
export default RecuperarContraseña;

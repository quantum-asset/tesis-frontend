import * as React from "react";
import { useNavigate, useParams } from "react-router";
import {
  UserContext,
  usuarioIsAuth,
} from "../../../globals/contexts/userContext";
import { Button, FormLabel } from "@mui/material";
import FormInputText from "../../../components/Formulario/FormInputText";
import logo from "../../../Static/logo-h-nb3.png";
import "./NuevaContrasenia.scss";
import { AuthController } from "../../../Controller/AuthController";
import { UsuarioController } from "../../../Controller/UsuarioControler";

const NuevaContrasenia = (props) => {
  let navigate = useNavigate();
  let params = useParams();
  const { recoverId } = params;
  console.log("recover ID", recoverId);
  const [usuarioContext] = React.useContext(UserContext);
  const [codigoOk, setCodigoOk] = React.useState(false);
  const [constraseniasOk, setContraseniasOk] = React.useState(false);
  const [idUsuario, setIdUsuario] = React.useState(0);

  const checkCodigoRecuperacion = async (codigoRecuperacion) => {
    //llamar al backend para validar el código
    //const isValid = false;
    const { success, message, data } = await AuthController.checkCode(
      codigoRecuperacion
    );

    console.log("recuperar code: ", data);
    setIdUsuario(data.idUsuario);
    if (success && data.idUsuario) {
      setCodigoOk(true);
    } else {
      navigate(`/recuperar-contrasenia`);
    }
  };
  React.useEffect(() => {
    //console.log(usuarioContext);
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
        //no habia código toncs lo redirijo al Home
        navigate(`/recuperar-contrasenia`);
      } else {
        //checkeo el código
        checkCodigoRecuperacion(recoverId);
      }
    }
  }, [usuarioContext, recoverId]);
  const [contrasenia1, setContrasenia1] = React.useState("");

  const [contrasenia2, setContrasenia2] = React.useState("");
  const handleChangeContrasenia1 = (value) => {
    setContrasenia1(value);
  };
  const handleChangeContrasenia2 = (value) => {
    setContrasenia2(value);
  };

  React.useEffect(() => {
    console.log("P1", contrasenia1);
    console.log("P2", contrasenia2);
    if (contrasenia1.length > 0 && contrasenia1 === contrasenia2) {
      setContraseniasOk(true);
    } else {
      setContraseniasOk(false);
    }
  }, [contrasenia1, contrasenia2]);
  const handleCambiarContrasenia = async () => {
    const { success, message, data } =
      await UsuarioController.cambiarContrasenia(idUsuario);
    if (success) {
      alert(
        "Se cambio la contraseña satisfacoriamente. Ya puede iniciar sesión"
      );
      navigate("/");
    } else {
      alert(message);
    }
  };

  if (usuarioIsAuth(usuarioContext) || !codigoOk) {
    return <React.Fragment>asa</React.Fragment>;
  } else
    return (
      <div className="main-container-nueva-contrasenia">
        <div className="form-container">
          <div className="logo-container">
            <img src={logo} width="50%" alt="logo-login" />
          </div>

          <React.Fragment>
            <h2 style={{ fontWeight: "500" }}>Ingresa una nueva contraseña</h2>
            <p>
              Elije una contreaseña segura. Te recomendamos que utilices
              diferentes contraseñas para diferentes cuentas.
            </p>

            <FormInputText
              name="CONTRASENIA1"
              onChange={handleChangeContrasenia1}
              value={contrasenia1}
              label="Nueva contraseña"
              //placeholder="Contraseña"
              type="password"
            />

            <FormInputText
              name="CONTRASENIA2"
              onChange={handleChangeContrasenia2}
              value={contrasenia2}
              label="Ingrese nuevamente la nueva contraseña"
              //placeholder="Contraseña"
              type="password"
            />
            <br />
            {!constraseniasOk && contrasenia1.length > 0 && (
              <FormLabel
                color={constraseniasOk ? "success" : "error"}
                component="legend"
              >
                {"Contraseñas no coinciden"}
              </FormLabel>
            )}
            <br />
            <Button
              style={{ margin: "18px 0" /* textTransform: "capitalize" */ }}
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleCambiarContrasenia}
              disabled={!constraseniasOk}
            >
              Cambiar contraseña
            </Button>
          </React.Fragment>
        </div>
      </div>
    );
};
export default NuevaContrasenia;

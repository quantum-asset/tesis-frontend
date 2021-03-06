import * as React from "react";
import { useNavigate } from "react-router";
import "./Login.scss";
import FormInputText from "../../../components/Formulario/FormInputText";

import { Button } from "@mui/material";
import { AuthController } from "../../../Controller/AuthController";
import { UserContext, usuarioIsAuth } from "../../../globals/contexts/userContext";
import { logoKamuiHorizontal } from "../../../Static/imageLinks";
const Login = (props) => {
  let navigate = useNavigate();
  const [usuarioContext, setUsuarioContext] = React.useContext(UserContext);
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

  const [credenciales, setCredenciales] = React.useState({
    CORREO: "",
    CONTRASENIA: "",
  });
  const handleChangeCredentials = (value, name) => {
    setCredenciales({ ...credenciales, ...{ [name]: value } });
    console.log("credenciales", { ...credenciales, [name]: value });
  };
  const iniciarSesion = async () => {
    //alert("iniciando sesion");
    const { success, message, data } = await AuthController.login(
      credenciales.CORREO,
      credenciales.CONTRASENIA
    );
    setUsuarioContext({ type: "LOGIN", payload: data });
    console.log("LOGIN", { success, message, data });
  };
  if (usuarioIsAuth(usuarioContext)) {
    return <React.Fragment></React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <div className="main-container-login">
          <div className="form-container">
            <div className="logo-container">
              <img src={logoKamuiHorizontal} width="50%" alt="logo-login" />
            </div>
            <h3>Inicia sesi??n</h3>
            <FormInputText
              name="CORREO"
              onChange={handleChangeCredentials}
              value={credenciales.CORREO}
              label="Ingrese su correo electr??nico"
              placeholder="Correo"
              type="email"
            />
            <FormInputText
              name="CONTRASENIA"
              onChange={handleChangeCredentials}
              value={credenciales.PASSWORD}
              label="Ingrese su contrase??a"
              placeholder="Contrase??a"
              type="password"
            />

            <button
              className="anchor"
              style={{ alignSelf: "flex-end", margin: "10px 0" }}
              //onClick={handleOpenDialog}
              onClick={() => navigate("/recuperar-contrasenia")}
            >
              Recuperar contrase??a
            </button>

            <Button
              style={{ margin: "18px 0", textTransform: "capitalize" }}
              color="primary"
              variant="contained"
              fullWidth
              onClick={iniciarSesion}
            >
              Iniciar Sesion
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
export default Login;

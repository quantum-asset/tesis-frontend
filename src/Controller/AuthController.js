import axios from "axios";
import { ResponseController } from "./ResponseController";

export class AuthController {
  static login = async (CORREO, CONTRASENIA) => {
    console.log("params", CORREO, CONTRASENIA);
    try {
      const result = await axios.post("/auth/login", { CORREO, CONTRASENIA });
      //console.log("login", result.data);
      if (!result || !result.data || !result.data.payload) {
        return ResponseController.error(
          "Ocurrio un error de conexión, por favor intentelo denuevo mas tarde. Si el error persiste, contacte al administrador de Quantum Asset"
        );
      }
      const { status, payload, message } = result.data;
      return ResponseController.ok(status, message, payload);
    } catch (error) {
      return ResponseController.error(
        "Ocurrio un error inesperado. Si el error persiste, contacte al administrador de Quantum Asset"
      );
    }
  };

  static requestRecoverPassword = async (CORREO) => {
    console.log("params", CORREO);
    try {
      const result = await axios.post("/auth/recover", { CORREO });
      //console.log("login", result);
      if (!result || !result.data || !result.data.payload) {
        return ResponseController.error("Ocurrio un error inesperado");
      }
      const { status, payload, message } = result.data;
      return ResponseController.ok(status, message, payload);
    } catch (error) {
      return ResponseController.error("Ocurrio un error inesperado");
    }
  };
}

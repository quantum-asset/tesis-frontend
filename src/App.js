import "./styles/App.scss";
import * as React from "react";
import {
  BrowserRouter as Enrutador,
  Routes as Rutas,
  Route as Ruta,
} from "react-router-dom";

import DefaultPage from "./pages/DefaultPage";
//import ECALayout from "./layouts/ECALayout";
import ECALLayout from "./layouts/ECALLayout";
import Login from "./pages/Auth/Login/Login";
import Maestros from "./pages/Maestros/Maestros";
import Reportes from "./pages/Reportes/Reportes";
import Configuracion from "./pages/Configuracion/Configuracion";

import Alertas from "./pages/Alertas/Alertas";
import RecuperarContraseña from "./pages/Auth/RecuperarContraseña/RecuperarContraseña";
import NuevaContrasenia from "./pages/Auth/NuevaContrasenia/NuevaContrasenia";

import DetalleActivo from "./pages/Maestros/Activos/DetalleActivo";
import Activos from "./pages/Maestros/Activos/Activos";
import TomaInventario from "./pages/TomaInventario/TomaInventario";
import ECALayout2 from "./layouts/ECALayout2";
function App() {
  console.log("App.js");
  return (
    <Enrutador>
      <Rutas>
        {/* AUTH */}
        <Ruta path="/" element={<Login />} />
        <Ruta path="/recuperar-contrasenia" element={<RecuperarContraseña />} />
        <Ruta path="/nueva-contrasenia" element={<NuevaContrasenia />} />
        <Ruta
          path="/nueva-contrasenia/:recoverId"
          element={<NuevaContrasenia />}
        />

        {/* Encargado Control Activos */}
        <Ruta path="eca" element={<ECALayout2 />}>
          {/* MAESTROS */}
          <Ruta path="maestros" element={<Maestros />} />
          <Ruta path="maestros/detalleActivo" element={<DetalleActivo />} />
          <Ruta
            path="maestros/detalleActivo/:idActivo"
            element={<DetalleActivo />}
          />
          <Ruta path="maestros/detalleLocacion" element={<DetalleActivo />} />
          <Ruta
            path="maestros/detalleLocacion/:idLocacion"
            element={<DetalleActivo />}
          />

          <Ruta path="toma-inventario" element={<TomaInventario />} />
          <Ruta path="toma-inventario/detalle" element={<TomaInventario />} />
          <Ruta
            path="toma-inventario/detalle/:idTomaInventario"
            element={<TomaInventario />}
          />

          <Ruta path="reportes" element={<Reportes />} />
          <Ruta path="configuracion" element={<Configuracion />} />
        </Ruta>

        {/* Encargado Control Activos de locacion */}
        <Ruta path="ecal" element={<ECALLayout />}>
          <Ruta path="activos" element={<Activos />} />
          <Ruta path="activos/detalle" element={<DetalleActivo />} />
          <Ruta path="activos/detalle/:idActivo" element={<DetalleActivo />} />
          <Ruta path="reportes" element={<Reportes />} />
          <Ruta path="alertas" element={<Alertas />} />
        </Ruta>

        <Ruta path="*" element={<DefaultPage />} />
      </Rutas>
    </Enrutador>
  );
}

export default App;

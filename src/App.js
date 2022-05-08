import "./styles/App.scss";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultPage from "./pages/DefaultPage";
import ECALayout from "./layouts/ECALayout";
import ECALLayout from "./layouts/ECALLayout";
import Login from "./pages/Login/Login";
import Maestros from "./pages/Maestros/Maestros";
import TomaInventario from "./pages/TomaInventario/TomaInventario";
import Reportes from "./pages/Reportes/Reportes";
import Configuracion from "./pages/Configuracion/Configuracion";
import Activos from "./pages/Activos/Activos";
import Alertas from "./pages/Alertas/Alertas";
import RecuperarContraseña from "./pages/RecuperarContraseña/RecuperarContraseña";
import NuevaContrasenia from "./pages/Auth/NuevaContrasenia/NuevaContrasenia";
function App() {
  console.log("App.js");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/recuperar-contrasenia" element={<RecuperarContraseña />}/>
        <Route path="/nueva-contrasenia" element={<NuevaContrasenia />}/>
        <Route path="/nueva-contrasenia/:recoverId" element={<NuevaContrasenia />}/>

        <Route path="eca" element={<ECALayout />}>
          <Route path="maestros" element={<Maestros />} />
          <Route path="toma-inventario" element={<TomaInventario />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>

        <Route path="ecal" element={<ECALLayout />}>
          <Route path="activos" element={<Activos />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="alertas" element={<Alertas />} />
        </Route>

        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

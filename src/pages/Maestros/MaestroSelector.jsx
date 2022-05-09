import * as React from "react";
import Activos from "./Activos/Activos";
import Locaciones from "./Locaciones/Locaciones";
import Tags from "./Tags/Tags";
import Usuarios from "./Usuarios/Usuarios";


const MaestroSelector = (props) => {
  const { maestroActivo } = props;
  switch (maestroActivo) {
    case 0:
      return <Activos />;
    case 1:
      return <Locaciones />;
    case 2:
      return <Tags />;
    case 3:
      return <Usuarios />;
    default:
      return <Activos />;
  }
};
export default MaestroSelector;

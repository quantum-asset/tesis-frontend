import * as React from "react";
import TabsScroll from "../../components/Tabs/Tabs";
import MaestroSelector from "./MaestroSelector";

const Maestros = (props) => {
  const [maestroActivo, setMaestroActivo] = React.useState(0);
  const handleChangeMaestro = (newValue) => {
    setMaestroActivo(newValue);
  };
  return (
    <React.Fragment>
      <TabsScroll
        onChange={handleChangeMaestro}
        value={maestroActivo}
        tabs={["Activos Fijos", "Locaciones", "Tags RFID", "Usuarios y roles"]}
      />

      <MaestroSelector maestroActivo={maestroActivo} />
    </React.Fragment>
  );
};
export default Maestros;

/**
     {(() => {
        switch (maestroActivo) {
          case 0:
            return <div>Activos</div>;
          case 1:
            return <div>Locaciones</div>;
          case 2:
            return <div>Tags</div>;
          case 3:
            return <div>Usuarios</div>;
          default:
            return <div>Activos</div>;
        }
      })()}
 * 
 */

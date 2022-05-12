import * as React from "react";
import SuperPaginationTable from "../../components/Tablas/SuperPaginationTable";
import TabsScroll from "../../components/Tabs/Tabs";
import Title from "../../components/Title/Title";
import { TomaInventarioController } from "../../Controller/TomaInventarioController";
import PanelTomaInventario from "./PanelTomaInventario";
import "./TomaInventario.scss";
import { TomaInventarioHeaders } from "./TomaInventarioHeaders";
const setEstado = (estado) => {
  switch (estado) {
    case 1:
      return "POR INICIAR";
    case 2:
      return "INICIADO";
    case 3:
      return "POR PROCESAR";
    case 4:
      return "PROCESADO";
    default:
      return "POR INICIAR";
  }
};
const TomaInventario = (props) => {
  const [tabTomaInventario, setTabTomaInventario] = React.useState(0);
  const [localRows, setLocalRows] = React.useState([]);
  const handleTabTomaInventario = (newValue) => {
    setTabTomaInventario(newValue);
  };
  const init = async (index) => {
    /* if(index===0){

      }else{

      } */
    const { success, data, message } = await TomaInventarioController.list();
    if (!success) {
      alert(message);
    }
    console.log("data", data);
    setLocalRows(
      data.map((TI) => {
        return {
          ...TI,
          ESTADO: setEstado(TI.POR_PROCESAR),
          TIPO_TOMA_INV: TI.ES_MUESTREO ? "MUESTREO" : "DETALLE",
          FECHA_INICIO: new Date(TI.FECHA_INICIO).toLocaleDateString(),
          FECHA_FIN: new Date(TI.FECHA_FIN).toLocaleDateString(),
        };
      })
    );
  };
  React.useEffect(() => {
    init(TomaInventario);
  }, [tabTomaInventario]);

  const handleDelete = (id) => {
    alert("delete " + id);
  };
  const handleEdit = (id) => {
      
    alert("edit " + id);
  };
  const handleSee = (id) => {
    alert("see " + id);
    //handleDetalle?.(id);
  };
  return (
    <React.Fragment>
      {/*  <TabsScroll
        onChange={handleTabTomaInventario}
        value={tabTomaInventario}
        tabs={["Vigentes", "Históricos"]}
      /> */}

      <div className="quantum-toma-inventario-page">
        <div className="quantum-body-left">
          <Title title="Procesos vigentes" />
          <PanelTomaInventario onDownload={() => {}} />
          <SuperPaginationTable
            headers={TomaInventarioHeaders(handleDelete, handleEdit, handleSee)}
            rows={localRows}
          />
        </div>
        <div className="quantum-body-right">
          <div>alertas</div>
          <div>chart procesos</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TomaInventario;

import * as React from "react";
import SuperPaginationTable from "../../../components/Tablas/SuperPaginationTable";
import Title from "../../../components/Title/Title";
import { ActivosController } from "../../../Controller/ActivosController";
import "./Activos.scss";
import PanelActivo from "./PanelActivo";
import { ActivosHeaders } from "./ActivosHeaders";
const Activos = (props) => {
  const { rowsFiltrado, handleDetalle } = props;
  const [localRows, setLocalRows] = React.useState([]);
  /*   const refactorListActivos = (data) => {
    console.log("data", data);
    return data.map((A) => {
      return {
        ...A,
        LOCACION: A.LOCACION.DENOMINACION,
        TIPO_ACTIVO: A.TIPO_ACTIVO.DENOMINACION,
      };
    });
  }; */
  React.useEffect(() => {
    const callActivosData = async () => {
      const { success, message, data } = await ActivosController.list();
      if (success) {
        // const datRefactorizada = refactorListActivos(data);
        console.log("data", data);
        setLocalRows(data);
        alert("éxito " + data.length);
      } else {
        alert(message);
      }
    };
    callActivosData();
  }, []);
  const handleDelete = (id) => {
    alert("delete " + id);
  };
  const handleEdit = (id) => {
    alert("edit " + id);
  };
  const handleSee = (id) => {
    alert("see " + id);
    handleDetalle?.(id);
  };
  return (
    <div className="quantum-activos-page">
      <div className="quantum-body-left">
        <Title title="Gestión de Activos Fijos" />
        <PanelActivo onDownload={() => {}} />

        <SuperPaginationTable
          headers={ActivosHeaders(handleDelete, handleEdit, handleSee)}
          rows={localRows}
        />
      </div>
      <div className="quantum-body-right">
        <div>tipo activo</div>
        <div>chart activo</div>
      </div>
    </div>
  );
};
export default Activos;

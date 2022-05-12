import * as React from "react";
import "./PanelTomaInventario.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, FormLabel, Grid, Tooltip, Tootip } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchInputText from "../../components/Formulario/SearchInputText";
import ComboBox from "../../components/Formulario/ComboBox";
import ComboBoxChips from "../../components/Formulario/ComboBoxChips";
import { LocacionController } from "../../Controller/LocacionController";
const PanelTomaInventario = (props) => {
  const { onDownload, handleChangeFiltro, filtros } = props;
  const [locaciones, setLocaciones] = React.useState([]);
  const [locacionesSeleccionadas, setLocacionesSeleccionadas] = React.useState(
    []
  );
  const init = async () => {
    const { success, message, data } = await LocacionController.list();
    if (!success) {
      alert(message);
      return;
    }
    setLocaciones(data);
  };
  React.useEffect(() => {
    init();
  }, []);
  const handleChangeLocacion = (value) => {
    setLocacionesSeleccionadas(value);
  };
  return (
    <div className="quantum-panel-toma-inv">
      <div className="mitad-izq">
        {" "}
        <ComboBoxChips
          label={"Locaciones"}
          options={locaciones}
          keyOption={"DENOMINACION"}
        />{" "}
        <ComboBox
          options={optionsTipoTomaInventario}
          style={{}}
          label={"Tipo de toma de inventario"}
          onChange={() => {}}
          defaultValue={optionsTipoTomaInventario[0]}
        />
        <ComboBox
          options={optionsEstado}
          style={{}}
          label={"Estado"}
          onChange={() => {}}
          defaultValue={optionsEstado[0]}
        />
      </div>
      <div className="mitad-der">
        {" "}
        <Button
          color="primary"
          variant="contained"
          //size="small"
          //fullWidth
          //style={{ margin: "1px", textTransform: "capitalize" }}
          startIcon={<FileDownloadIcon />}
          onClick={() => {
            onDownload?.();
          }}
          //onClick={iniciarSesion}
        >
          Descargar
        </Button>
        <Button
          color="primary"
          variant="contained"
          //size="small"
          //style={{ margin: "1px", textTransform: "capitalize" }}
          //fullWidth
          startIcon={<UploadFileIcon />}
          //onClick={iniciarSesion}
          //onClick={() => setOpenCargaMasiva(true)}
        >
          Subir CSV
        </Button>
        <Tooltip title="Agregar Nuevo Activo">
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            style={{ zIndex: 1 }}
            //onClick={() => setOpenDialogRecuperacion(true)}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
};
export default PanelTomaInventario;
const optionsEstado = [
  { label: "TODOS", value: 0 },
  { label: "POR INCIAR", value: 1 },
  { label: "INICIADO", value: 2 },
  { label: "POR PROCESAR", value: 3 },
  { label: "PROCESADO", value: 4 },
];
const optionsTipoTomaInventario = [
  { label: "TODOS", value: 0 },
  { label: "MUESTREO", value: 1 },
  { label: "DETALLADO", value: 2 },
];

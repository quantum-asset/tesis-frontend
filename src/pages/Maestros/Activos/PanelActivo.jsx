import * as React from "react";
import "./PanelActivos.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, FormLabel, Grid, Tooltip, Tootip } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchInputText from "../../../components/Formulario/SearchInputText";
const PanelActivo = (props) => {
  const { onDownload, handleChangeFiltro, filtros } = props;

  const handleChange = (value, nombre) => {};
  return (
    <div className="quantum-panel">
      <SearchInputText
        onChange={handleChange}
      //  style={{ margin: "2px 0" }}
        name={"DENOMINACION"}
        // value={localFiltros[0].value}
        fullWidth
        placeholder="Denominación del activo"
        label={"Denominación"}
      />
      <Button
        color="primary"
        variant="contained"
        //size="small"
        //fullWidth
        style={{ margin: "1px", textTransform: "capitalize" }}
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
        style={{ margin: "1px", textTransform: "capitalize" }}
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
          style={{ margin: "1px" }}
          //onClick={() => setOpenDialogRecuperacion(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <SearchInputText
        onChange={handleChange}
        style={{ margin: "2px 0" }}
        name={"COD_TAG"}
        // value={localFiltros[0].value}
        fullWidth
        placeholder="Nro de tag"
        label={"Num. de tag"}
      />
      <SearchInputText
        onChange={handleChange}
        style={{ margin: "2px 0" }}
        name={"LOCACION"}
        fullWidth
        // value={localFiltros[0].value}
        placeholder="Locación"
        label={"Locación"}
      />
      <SearchInputText
        onChange={handleChange}
        style={{ margin: "2px 0" }}
        name={"PROVEEDOR"}
        fullWidth
        //value={filtros.DENOMINACION}
        placeholder="Razon social del proveedor"
        label={"Proveedor"}
      />

      <SearchInputText
        onChange={handleChange}
        style={{ margin: "2px 0" }}
        name={"TIPO_ACTIVO"}
        fullWidth
        // value={filtros.DENOMINACION}
        placeholder="Tipo de activo"
        label={"Tipo de Activo"}
      />
    </div>
  );
};
export default PanelActivo;

import { Chip, IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FaceIcon from "@mui/icons-material/Face";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import * as React from "react";
export const TomaInventarioHeaders = (
  handleDelete = () => {},
  handleEdit = () => {},
  handleSee = () => {}
) => [
  { title: "Fecha Inicio", field: "FECHA_INICIO" },
  { title: "Fecha Fin", field: "FECHA_FIN" },

  { title: "Tipo de Toma de Inventario", field: "TIPO_TOMA_INV" },

  {
    title: "Locaciones",
    field: "LOCACIONES",
    render: (rowData) => {
      return (
        <React.Fragment>
          {rowData.LOCACIONESXTI.map(({ LOCACION }) => (
            <Chip
              icon={<LocalGasStationIcon />}
              label={LOCACION?.DENOMINACION || "-"}
              variant="outlined"
            />
          ))}
        </React.Fragment>
      );
    },
  },

  {
    title: "Encargados de toma de inventario",
    field: "USUARIOS",
    render: (rowData) => {
      return (
        <React.Fragment>
          {rowData.USUARIOSXTI.map(({ USUARIO }) => (
            <Chip
              icon={<FaceIcon />}
              label={
                USUARIO
                  ? `${USUARIO.PRIMER_APELLIDO} - ${USUARIO.NOMBRES}`
                  : "-"
              }
              variant="outlined"
            />
          ))}
        </React.Fragment>
      );
    },
  },
  { title: "Estado", field: "ESTADO" },
  {
    title: "Acciones",
    render: (rowData) => {
      return (
        <Stack direction="row">
          <Tooltip title="Ver Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleSee(rowData.ID_TOMA_INVENTARIO)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Editar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleEdit(rowData.ID_TOMA_INVENTARIO)}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleDelete(rowData.ID_TOMA_INVENTARIO)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      );
    },
  },
];

import { IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
export const ActivosHeaders = (
  handleDelete = () => {},
  handleEdit = () => {},
  handleSee = () => {}
) => [
  { title: "Codigo de Tag", field: "TAG" },
  { title: "Tipo de activo", field: "TIPO_ACTIVO" },

  { title: "Denominación", field: "DENOMINACION" },
  { title: "Características", field: "OBSERVACIONES" },
  //{ title: "Marca y Modelo", field: "MARCA_MODELO" },
  { title: "Marca y Modelo", field: "MARCA" },

  { title: "Locación", field: "LOCACION" },
  { title: "Proveedor", field: "PROVEEDOR_RAZON_SOCIAL" },
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
              onClick={(e) => handleSee(rowData.ID_ACTIVO)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Editar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleEdit(rowData.ID_ACTIVO)}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleDelete(rowData.ID_ACTIVO)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      );
    },
  },
];

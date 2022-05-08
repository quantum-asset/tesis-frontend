import React, { Fragment, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import "./NavBar.scss";
import { YELLOW } from "../../../Theme/MainColors";
import { cerrarSesionRedux } from "../../../Context/actions/sesionAction";
import { useUserValue } from "../../../Context/Sesion";
import { UsuarioController } from "../../../Controller/UsuarioControler";
import SuperDialog from "../../../Templates/Dialogs/SuperDialog";
import { Grid } from "@mui/material";
const createFile = (name, size, type, blob) => {
  const file = new File([blob], name, { type });
  Object.defineProperty(file, "size", {
    get() {
      return size;
    },
  });
  return file;
};
function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
function blobToFile(theBlob, fileName) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}
export default function (props) {
  const [imageUser, setImageUser] = useState(undefined);
  const { title, onChangeMobileMenu } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [{ auth, usuario }, dispatch] = useUserValue();
  const init = async (usuario) => {
    console.log("Navbar id usuario", usuario);

    const { ID_ARCHIVO } = usuario;
    if (ID_ARCHIVO && ID_ARCHIVO.toString() !== "null") {
      const { success, message, data } = await UsuarioController.getImage(
        ID_ARCHIVO
      );
      if (success) {
        setImageUser(data.file);
      } else {
        console.err("Error on image profile: ", message);
      }
    } else {
      console.log("Navbar no hay id-archivo");
    }
  };
  useEffect(() => {
    console.log("NAVBAR usuario", usuario);
    console.log("NAVBAR props", props);
    setNombreUsuario(`${usuario.NOMBRES} ${usuario.PRIMER_APELLIDO}`);
    init(usuario);
  }, [usuario]);
  const handleCerrarSesion = () => {
    cerrarSesionRedux(dispatch);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenMobileMenu = () => {
    onChangeMobileMenu?.(true);
  };
  const [nombreUsuario, setNombreUsuario] = React.useState("");
  const [openProfile, setOpenProfile] = React.useState(true);
  const handleOpenProfile = () => {
    setOpenProfile(true);
    handleClose();
  };
  const handleCloseProfile = () => {
    setOpenProfile(true);
    handleClose();
  };
  const [editProfile, setEditProfile] = useState(false);
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          style={{
            backgroundColor: "white",
            color: "black",
            height: "65px",
            borderBottom: "7px solid " + YELLOW,
          }}
        >
          <Toolbar variant="dense">
            <div className="navbar-menu-icon">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenMobileMenu}
              >
                <MenuIcon />
              </IconButton>
            </div>

         
            <h2 className="navbar-title" style={{ flexGrow: 1 }}>
              {title}
            </h2>
            
            {/** SPACE */}
            <div className="navbar-nombre">{nombreUsuario}</div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {" "}
              <Avatar
                style={{ margin: "0%" }}
                alt={nombreUsuario || "avatar-name"}
                src={
                  imageUser ||
                  "https://img.vixdata.io/pd/webp-large/es/sites/default/files/btg/tech.batanga.com/files/Asi-es-como-aplicas-la-tecnologia-de-Tony-Stark-a-diario-sin-darte-cuenta-1.jpg"
                }
              />
              <ExpandMore />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenProfile}>Perfil</MenuItem>
              <MenuItem onClick={handleCerrarSesion}>Cerrar Sesion</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <SuperDialog
        open={openProfile}
        title="Perfil de usuario"
        onClose={handleCloseProfile}
        actions={<Fragment></Fragment>}
      >
        <Grid container>
          <Grid item xs={6}>
            <div style={{ width: "110px", height: "110px" }}>
              <img width="100%" src={imageUser} alt="blablandca" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <p>
              <b>Nombres: </b>
              {usuario.NOMBRES}
            </p>
            <p>
              <b>Primer apellido: </b>
              {usuario.PRIMER_APELLIDO}
            </p>
            <p>
              <b>Segundo apellido: </b>
              {usuario.SEGUNDO_APELLIDO.toString() !== "null"
                ? usuario.SEGUNDO_APELLIDO
                : "-"}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <b>Correo: </b>
              {usuario.CORREO}
            </p>
            <p>
              <b>Tipo Doc: </b>
              {usuario.TIPO_DOCUMENTO_IDENTIDAD}
            </p>
            <p>
              <b>Tipo Doc: </b>
              {usuario.NUM_DOCUMENTO_IDENTIDAD}
            </p>
          </Grid>
        </Grid>
      </SuperDialog>
    </Fragment>
  );
}

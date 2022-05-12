import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import "./NavBar.scss";
import { YELLOW } from "../../../theme/MainColors";
import { UserContext } from "../../../globals/contexts/userContext";
import { UsuarioController } from "../../../Controller/UsuarioControler";
import SuperDialog from "../../../Templates/Dialogs/SuperDialog";
import { Grid } from "@mui/material";
export default function NavBarElevate(props) {
  const [usuarioContext, setUsuarioContext] = React.useContext(UserContext);
  const [imageUser, setImageUser] = React.useState(undefined);

  const { NOMBRES, PRIMER_APELLIDO, SEGUNDO_APELLIDO } = usuarioContext;
  const nombreUsuario = `${PRIMER_APELLIDO} ${
    SEGUNDO_APELLIDO || ""
  }, ${NOMBRES}`;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { title, onMobileMenuOpen } = props;

  const handleOpenMobileMenu = () => {
    onMobileMenuOpen?.();
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const init = async (usuario) => {
    const { ID_ARCHIVO } = usuario;
    const { success, message, data } = await UsuarioController.getImage(
      ID_ARCHIVO
    );
    if (ID_ARCHIVO && ID_ARCHIVO.toString() !== "null") {
      if (success) {
        setImageUser(data.file);
      } else {
        console.err("Error on image profile: ", message);
      }
    } else {
      console.log("Navbar no hay id-archivo");
    }
  };
  React.useEffect(() => {
    init(usuarioContext);
  }, [usuarioContext]);
  const handleCerrarSesion = () => {
    setUsuarioContext({ type: "LOGOUT" });
  };

  const [openProfile, setOpenProfile] = React.useState(false);
  const handleOpenProfile = () => {
    setOpenProfile(true);
    handleClose();
  };
  const handleCloseProfile = () => {
    setOpenProfile(true);
    handleClose();
  };
  return (
    <React.Fragment>
      <nav
        className="quantum-nav-bar"
        style={{
          borderBottom: "5px solid " + YELLOW,
        }}
      >
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
          {title || "titulo"}
        </h2>
        <div className="navbar-nombre">{nombreUsuario || "nombreUsuario"}</div>
        <Avatar
          style={{ margin: "0%" }}
          alt={nombreUsuario || "avatar-name"}
          src={
            imageUser ||
            "https://img.vixdata.io/pd/webp-large/es/sites/default/files/btg/tech.batanga.com/files/Asi-es-como-aplicas-la-tecnologia-de-Tony-Stark-a-diario-sin-darte-cuenta-1.jpg"
          }
        />{" "}
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          {" "}
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
      </nav>
      <SuperDialog
        open={openProfile}
        title="Perfil de usuario"
        onClose={handleCloseProfile}
        actions={<React.Fragment></React.Fragment>}
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
              {usuarioContext.NOMBRES}
            </p>
            <p>
              <b>Primer apellido: </b>
              {usuarioContext.PRIMER_APELLIDO}
            </p>
            <p>
              <b>Segundo apellido: </b>
              {usuarioContext.SEGUNDO_APELLIDO.toString() !== "null"
                ? usuarioContext.SEGUNDO_APELLIDO
                : "-"}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <b>Correo: </b>
              {usuarioContext.CORREO}
            </p>
            <p>
              <b>Tipo Doc: </b>
              {usuarioContext.TIPO_DOCUMENTO_IDENTIDAD}
            </p>
            <p>
              <b>Tipo Doc: </b>
              {usuarioContext.NUM_DOCUMENTO_IDENTIDAD}
            </p>
          </Grid>
        </Grid>
      </SuperDialog>
    </React.Fragment>
  );
}

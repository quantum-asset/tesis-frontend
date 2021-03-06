import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function SuperDialog(props) {
  const {
    open,
    onCancel,
    onSave,
    onAccept,
    onClose,
    title,
    body,
    children,
    onlyAccept,
    actions,
    ...other
  } = props;
  //const [open, setOpen] = React.useState(false);
  //const [data, setData] = React.useState({});
  const handleClose = () => {
    onClose?.(false);
  };
  const handleAccept = (data) => {
    onAccept?.(data);
    handleClose();
  };
  const handleCancel = (data) => {
    onCancel?.(data);
    handleClose();
  };
 /*  const handleSave = (data) => {
    onSave?.(data);
    handleClose();
  }; */
  return (
    <div>
      <Dialog
        {...other}
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{title || ""}</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {body || children || "body"}
          </DialogContentText>
        </DialogContent>
        {actions ? (
          <DialogActions>{actions}</DialogActions>
        ) : (
          <DialogActions>
            {onCancel || onSave || onAccept ? (
              <React.Fragment>
                {onCancel && (
                  <Button
                    startIcon={<CancelOutlinedIcon />}
                    variant="text"
                    style={{ textTransform: "capitalize" }}
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                )}

                {onSave && (
                  <Button
                    startIcon={<SaveOutlinedIcon />}
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={handleClose}
                  >
                    Guardar
                  </Button>
                )}
                {onAccept && (
                  <Button
                    startIcon={<CheckCircleOutlineOutlinedIcon />}
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={handleAccept}
                  >
                    Aceptar
                  </Button>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {!onlyAccept && (
                  <Button
                    variant="text"
                    style={{ textTransform: "capitalize" }}
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                )}

                <Button
                  variant="contained"
                  style={{ textTransform: "capitalize" }}
                  onClick={handleClose}
                >
                  Aceptar
                </Button>
              </React.Fragment>
            )}
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

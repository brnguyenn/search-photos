import { Dialog, DialogContent, SxProps, Theme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

interface DialogProps {
  isOpen: boolean;
  children?: React.ReactNode;
  handleClose: () => void;
  contentSx?: SxProps<Theme>;
}

const StyledDialog = ({
  isOpen,
  children,
  handleClose,
  contentSx,
}: DialogProps): JSX.Element => (
  <div>
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <DialogContent sx={contentSx}>
        {children}
        {handleClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CancelOutlinedIcon fontSize="large" color="action" />
          </IconButton>
        ) : null}
      </DialogContent>
    </Dialog>
  </div>
);

export default StyledDialog;

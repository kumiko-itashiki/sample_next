import * as React from "react";
import { FC } from "react";
import { Typography, Card } from "@mui/material";
import { Stack } from "@/components/atoms/Stack";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Modal } from "@/components/atoms/Modal";
import Button from "@mui/material/Button";

type Props = {
  title: string;
  price: number;
  address: string;
  onClick: () => void;
};

export const JobCard: FC<Props> = ({ title, price, address, onClick }) => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <Stack
          color="darkGary"
          spacing="16px"
          sx={{ m: 0, p: 2 }}
          // width="300px"
          // margin="30px auto"
          // padding="25px"
        >
          <Typography color="#f00">{title}</Typography>
          <Typography fontWeight="bold">時給 {price}円</Typography>
          <Typography fontSize="12px">{address}</Typography>
        </Stack>

        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            詳しく見る
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 5 }} id="customized-dialog-title">
              求人詳細
            </DialogTitle>
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
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>
                <Stack color="darkGary" spacing="16px">
                  <Typography color="#f00">{title}</Typography>
                  <Typography fontWeight="bold">時給 {price}円</Typography>
                  <Typography fontSize="12px">{address}</Typography>
                </Stack>
              </Typography>
            </DialogContent>
          </BootstrapDialog>
        </React.Fragment>
      </Card>
    </>
  );
};

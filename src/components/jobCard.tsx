import * as React from "react";
import { useEffect, useState, memo, FC } from "react";

import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { Box } from "@/components/atoms/Box";
import { Stack } from "@/components/atoms/Stack";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";

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
      <Card mx={4} sx={{ my: { xs: 3, md: 4 } }}>
        <Stack
          direction="row"
          alignItems="flex-end"
          display="inline-block"
          color="darkGary"
          spacing="16px"
          sx={{ m: 0, p: 2 }}
        >
          <Typography
            variant="sinB1"
            display="inline-block"
            mr={0}
            sx={{ color: "primary.main" }}
          >
            {title}
          </Typography>

          <Typography fontWeight="bold">時給 {price}円</Typography>

          <Typography
            variant="sinN5"
            display="inline-block"
            sx={{ color: "gray.main" }}
          >
            {address}
          </Typography>
        </Stack>

        <React.Fragment>
          <Button
            sx={{
              h: "40px",
              w: "100px",
              paddingtop: "13px",
              paddingbottom: "13px",
              m: "0px 10px 12px",
              p: "0px 20px 12px",
            }}
            rounded="circle"
            shadow="primary"
            textColor="#FFF"
            variant="outlined"
            bgColor="primary"
            onClick={handleClickOpen}
          >
            詳しく見る
          </Button>

          <BootstrapDialog
            sx={{
              margin: "0px",
              padding: "20px 100px",
            }}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <Typography
              variant="sinB1"
              display="inline-block"
              mr={0}
              id="customized-dialog-title"
            >
              求人詳細
            </Typography>

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 5,
                top: 5,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent dividers>
              <Typography gutterBottom>
                <Stack
                  direction="row"
                  alignItems="flex-end"
                  display="inline-block"
                  color="darkGary"
                  spacing="16px"
                  sx={{ m: 0, p: 2 }}
                >
                  <Typography
                    variant="sinB1"
                    display="inline-block"
                    mr={0}
                    sx={{ color: "primary.main" }}
                  >
                    {title}
                  </Typography>
                  <Typography fontWeight="bold">時給 {price}円</Typography>
                  <Typography fontSize="12px">{address}</Typography>

                  <Button
                    sx={{
                      h: "40px",
                      w: "100px",
                      padding: "13px 80px 13px",
                      margin: "0",
                      background:
                        "linear-gradient(135deg, rgb(255, 176, 57) 0.2%, rgb(253, 123, 51) 98.6%)",
                    }}
                    rounded="circle"
                    textColor="#FFF"
                  >
                    応募する
                  </Button>
                </Stack>
              </Typography>
            </DialogContent>
          </BootstrapDialog>
        </React.Fragment>
      </Card>
    </>
  );
};

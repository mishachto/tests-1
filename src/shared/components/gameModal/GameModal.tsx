import React from "react";
import { Dialog, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GameModalProps } from "@shared/types/modal";

export const GameModal = ({ isOpen, onClose, gameUrl }: GameModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullScreen
      slotProps={{
        paper: {
          sx: {
            margin: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="iframe"
          src={gameUrl}
          title="Casino Game"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          allowFullScreen
          sx={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Box>
    </Dialog>
  );
};

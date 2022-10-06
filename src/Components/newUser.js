import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { setUsername } from "../State/userSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewUser() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    handleOpen();
  }, []);

  const nameChangehandler = (e) => {
    setUser(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUsername({ username: user }));
    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={submitHandler}>
              <TextField
                value={user}
                id="filled-basic"
                label="Enter your name"
                variant="filled"
                onChange={nameChangehandler}
              />
              <Box>
                <Button type="submit" variant="outlined">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

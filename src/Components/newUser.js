import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Input, Typography } from "@mui/material";
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

export default function NewUser({ openModal }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    handleOpen();
  }, []);

  const nameChangehandler = (e) => {
    setUser(e.target.value);
    if (e.target.value !== "") {
      setErr("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (user === "") {
      setErr("Please enter you name first");
      return;
    }
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
              <Typography sx={{ color: "red" }}>{err}</Typography>
              <Input
                value={user}
                placeholder="Enter your name"
                type="string"
                fullWidth={true}
                onChange={nameChangehandler}
                autoFocus={true}
                inputProps={{ maxLength: 10 }}
                sx={{ marginBottom: "12px" }}
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

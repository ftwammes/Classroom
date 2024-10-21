import { Avatar, IconButton, MenuItem, Menu } from "@mui/material";
import { Add, Apps, Menu as MenuIcon } from "@mui/icons-material";
import React, { useState } from "react";;
import styles from "./Navbar.module.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__left}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://www.gstatic.com/classroom/web/10th_anniversary.png"
            alt="Google Logo"
            className={styles.navbar__logo}
          />{" "}
        </div>
        <div className={styles.navbar__right}>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Add />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
          <Avatar src={"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lykwcwv6r86ddf"} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              Participar da turma
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
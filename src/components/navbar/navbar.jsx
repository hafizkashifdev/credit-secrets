import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Circle } from "@mui/icons-material";
import logoImage from "../../assects/images/logo.png";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = React.useState("transparent");
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setNavbarBackground("#FFFFFF"); // Change background color when scrolling
      } else {
        setNavbarBackground("rgba(0, 0, 0, 0)"); // Set background color to transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid container alignItems="center" sx={{ marginBottom: "4rem" }}>
      <AppBar
        position="fixed"
        sx={{
          background: "inherit",
          borderBottom: "none",
          p: 1.5,
          boxShadow: "none",
          backdropFilter: "blur(6px) !important",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                marginLeft: "12rem",
                "@media (max-width: 1536px)": {
                  marginLeft: "1rem",
                },
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  fontFamily: "Poppins, sans-serif",
                  color: "#000000",
                  "@media (max-width: 600px)": {
                   width:'100%',
                  },
                }}
              >
                <img
                  src={logoImage}
                  alt="Logo"
                  style={{ marginRight: "8px", width: "60px", height: "60px", }}
                />
                Credit Repair Ai&nbsp;
                <span style={{ fontSize: "6px", color: "#D22126" }}>
                  <Circle sx={{ fontSize: "inherit", mt: 1.2 }} />
                </span>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "flex-end",
              marginRight: "20px",
              p:5
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: "#000000",
              }}
            >
              {anchorElNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom", 
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top", 
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none", },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{mr:10}}>
                <Typography textAlign="center">
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Button
                      color="inherit"
                      sx={{
                        borderRadius: "100px",
                        backgroundColor: "transparent",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        padding: "0.6rem 2rem",
                        color: "#D22126",
                        border: "1px solid",
                        p: "9px 32px",
                        borderColor: "#D22126",
                        width: "100%",
                        height: "44px",
                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "#D22126",
                          borderColor: "#D22126",
                          color: "white",
                        },
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      color="inherit"
                      sx={{
                        borderRadius: "100px",
                        p: "5px",
                        backgroundColor: "#D22126",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        padding: "0.6rem 2rem",
                        textTransform: "capitalize",
                        width: "100%",
                        height: "44px",
                        "&:hover": {
                          backgroundColor: "#EEC932",
                          borderColor: "#EEC932",
                        },
                        border: "1px solid",
                        borderColor: "#D22126",
                        color: "white",
                        mt: 2,
                      }}
                    >
                      Register Now
                    </Button>
                  </Box>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              marginRight: "12rem",
              "@media (max-width: 1536px)": {
                marginRight: "1rem",
              },
            }}
          >
            <Button
              color="inherit"
              sx={{
                borderRadius: "100px",
                backgroundColor: "transparent",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                padding: "0.6rem 2rem",
                color: "#D22126",
                border: "1px solid",
                marginRight: "18px",
                p: "9px 32px",
                borderColor: "#D22126",
                width: "108px",
                height: "44px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#D22126",
                  borderColor: "#D22126",
                  color: "white",
                },
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{
                borderRadius: "100px",
                p: "5px",
                backgroundColor: "#D22126",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                padding: "0.6rem 2rem",
                textTransform: "capitalize",
                width: "175px",
                height: "44px",
                "&:hover": {
                  backgroundColor: "#EEC932",
                  borderColor: "#EEC932",
                },
                border: "1px solid",
                borderColor: "#D22126",
                color: "white",
              }}
            >
              Register Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;

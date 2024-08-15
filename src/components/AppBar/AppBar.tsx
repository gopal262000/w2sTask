import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CurrentUserProps } from "../../types";
import Profile from "../Profile";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.primary.main,
  height: '60px'
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
}));

/**
 * An App bar with menu options, Logo and Profile options
 * @param {Function} onSideMenuClicked - Controls whether to show or hide the side menu
 * @returns {Component} - App Bar
 */

export default function CustomAppBar({
  onSideMenuClick,
}: {
  onSideMenuClick: () => void;
}) {
  const userData: CurrentUserProps = useSelector(
    (state: { auth: CurrentUserProps }) => state.auth
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onSideMenuClick}
            data-testid='menu-button'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            W2S Task
          </Typography>
          {userData?.username ? (
            <Profile user={userData} />
          ) : (
            <StyledLink to="/login">Login</StyledLink>
          )}
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

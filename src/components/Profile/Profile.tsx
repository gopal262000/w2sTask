import React from "react";
import { CurrentUserProps } from "../../types";
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Popover,
} from "@mui/material";
import ProfileCard from "./ProfileCard";

interface ProfileProps {
  user: CurrentUserProps;
}

/**
 * A ProfileCard with a Profile Icon Button
 * @param {ProfileProps} user - serves the user data
 * @returns - A Component shows a Profile Icon and Clicking on that will reveal the Profile Card
 */
const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOnProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Set the anchor element
  };

  const handleClosePopover = () => {
    setAnchorEl(null); // Close the popover
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Profile">
        <IconButton onClick={handleOnProfileClick} sx={{ p: 0 }}>
          <Avatar alt={user.username} src={user.image} />
        </IconButton>
      </Tooltip>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ProfileCard profile={user} />
      </Popover>
    </Box>
  );
};

export default Profile;

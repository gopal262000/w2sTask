import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { CurrentUserProps } from "../../types";
import { useNavigate } from "react-router";

const settings = ["Logout"];

/**
 * A Profile card that displays minimal information about the user with some action buttons
 * @param {CurrentUserProps} profile - Contains the information about the current user
 * @returns A profile card
 */
const ProfileCard = ({ profile }: { profile: CurrentUserProps }) => {
  const navigate = useNavigate();

  const handleOnMenuClick = (setting: string) => {
    switch (setting) {
      case "Logout":
        localStorage.removeItem("w2sToken");
        navigate("/login");
    }
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Avatar
            alt={profile.username}
            src={profile.image}
            sx={{ width: 100, height: 100 }}
          />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {profile.firstName} {profile.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Email: </strong>
            {profile.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Phone: </strong>
            {profile.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {settings.map((setting) => {
          return (
            <Button
              size="small"
              color="primary"
              onClick={() => handleOnMenuClick(setting)}
            >
              {setting}
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
};

export default ProfileCard;

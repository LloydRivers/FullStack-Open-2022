// Redux
import { useSelector } from "react-redux";
import { selectNotification } from "features/slices/notificationSlice";

// Material UI
import { Alert } from "@mui/material";

const Notification = () => {
  const notification = useSelector(selectNotification);

  if (notification === null) return null;

  return <Alert severity={notification.type}>{notification.message}</Alert>;
};

export default Notification;

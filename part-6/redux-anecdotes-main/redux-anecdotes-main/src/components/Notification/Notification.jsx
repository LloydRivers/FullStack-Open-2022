import { useSelector } from "react-redux";
import { selectState } from "../../features/anecdotes/notificationSlice";
import "./notification.css";

const Notification = () => {
  const notification = useSelector(selectState);

  return notification && <div className="notification">{notification}</div>;
};

export default Notification;

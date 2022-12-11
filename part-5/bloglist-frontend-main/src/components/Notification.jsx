import "./notification.css";
import PropTypes from "prop-types";
const Notification = ({ message }) => {
  if (message === null) return null;

  if (message.includes("error")) {
    console.log("inside error");
    return <div className="error">{message.substring(5)}</div>;
  }

  return <div className="success">{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;

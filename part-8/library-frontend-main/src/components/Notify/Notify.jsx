const Notify = ({ message }) => {
  console.log("Notify message: ", message);
  if (!message) {
    return null;
  }
  if (message) {
    return (
      <div>
        <div style={{ color: "red" }}>{message}</div>
      </div>
    );
  }
};

export default Notify;

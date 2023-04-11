const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  } else
    return (
      <div style={{ color: "red" }}>
        Error: {errorMessage.invalidMessage}: {errorMessage.invalidArgs}
      </div>
    );
};

export default Notify;

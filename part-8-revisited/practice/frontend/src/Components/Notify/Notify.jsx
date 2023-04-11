import { Alert } from "antd";

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  } else {
    return (
      <Alert
        message={`Error: ${errorMessage.invalidMessage}: ${errorMessage.invalidArgs}`}
        type="error"
        showIcon
      />
    );
  }
};

export default Notify;

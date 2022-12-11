import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BASE_URL}/api/login`;

export const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response;
};

//

import axios from "axios";
const baseURL = "https://full-stack-open-2022.vercel.app/api/persons";

const getAllPersons = () => {
  return axios.get(baseURL);
};

const createPerson = (newObject) => {
  return axios.post(baseURL, newObject);
};

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};
const updatePerson = (name, newObject) => {
  console.log("name", name);
  return axios.put(`${baseURL}/${name}`, newObject);
};
export default {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
};

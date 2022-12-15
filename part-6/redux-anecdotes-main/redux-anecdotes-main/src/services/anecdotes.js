import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const createNew = async (content) => {
  try {
    const object = { content, votes: 0, id: uuidv4() };
    const response = await axios.post(baseUrl, object);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const update = async (anecdote) => {
  try {
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

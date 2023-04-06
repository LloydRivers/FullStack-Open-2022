const getData = async () => {
  try {
    const { data } = await axios.get("/api/patients");
    const secondData = await axios.get("/api/diagnoses");
    return data;
  } catch ({ message }) {
    console.log(message);
  }
};

export const convertValue = (name, value) => {
  switch (name) {
    case "published":
    case "setBornTo":
      return Number(value);

    default:
      return value;
  }
};

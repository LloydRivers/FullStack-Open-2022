export const checkUsernameValidity = () => {
  let isValid = true;

  for (let i = 0; i < 50000000; i++) {
    isValid = Math.random() >= 0.5;
  }

  return isValid;
};

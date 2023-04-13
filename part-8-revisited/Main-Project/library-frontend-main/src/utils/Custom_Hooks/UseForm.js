import { useState } from "react";
import { convertValue } from "../convertValues.js";

function useForm(mutation, initialValues) {
  const [values, setValues] = useState(initialValues);
  // Define the function to handle changes to form values
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Convert the value if necessary using the helper function
    const newValue = convertValue(name, value);

    // Update the form values state with the new value for the changed field
    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    reset();
    mutation({ variables: { ...values } });
  };

  // Define the function to reset the form to its initial values
  const reset = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    setValues,
  };
}

export default useForm;

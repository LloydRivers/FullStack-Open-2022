import { useState } from "react";

function useForm(mutation) {
  // Set up state for the form values and errors
  const initialValues = {
    name: "",
    phone: "",
    street: "",
    city: "",
  };
  const [values, setValues] = useState(initialValues);

  // Define the function to handle changes to form values
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the form values state with the new value for the changed field
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
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

  // Return an object containing the form values, errors, and functions to handle form changes and submission
  return { values, handleChange, handleSubmit };
}

export default useForm;

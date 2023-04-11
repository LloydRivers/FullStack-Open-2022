import { useEffect } from "react";

import { useMutation } from "@apollo/client";

import { EDIT_NUMBER } from "Queries/queries";

import useForm from "utils/Custom_Hooks/UseForm";

const PhoneForm = ({ setError }) => {
  const [changeNumber, result] = useMutation(EDIT_NUMBER);

  const { values, handleChange, handleSubmit } = useForm(changeNumber, {
    name: "",
    phone: "",
  });

  useEffect(() => {
    if (result.data && result.data.editNumber === null) {
      setError({
        invalidArgs: "",
        invalidMessage: "Person not found",
      });
    }
  }, [result.data]);

  return (
    <div>
      <h2>change number</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          phone
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">change number</button>
      </form>
    </div>
  );
};

export default PhoneForm;

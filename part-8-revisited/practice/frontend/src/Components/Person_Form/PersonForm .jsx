import { useMutation } from "@apollo/client";
import useForm from "utils/Custom_Hooks/UseForm";

import { CREATE_PERSON, ALL_PERSONS } from "Queries/queries";

const PersonForm = ({ setError }) => {
  /*  
   useMutation is a hook that returns an array with two elements:
   the first element is a function to execute the mutation
   the second element is an object containing information about the mutation
   */

  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      const invalidArgs = error.graphQLErrors[0].extensions.invalidArgs;
      const invalidMessage = error.graphQLErrors[0].message;
      setError({
        invalidArgs,
        invalidMessage,
      });
    },
  });

  const { values, handleChange, handleSubmit } = useForm(createPerson, {
    name: "",
    phone: "",
    street: "",
    city: "",
  });

  return (
    <div>
      <h2>create new</h2>
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
        <div>
          street
          <input
            type="text"
            name="street"
            value={values.street}
            onChange={handleChange}
          />
        </div>
        <div>
          city
          <input
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
          />
        </div>
        <button type="submit">add!</button>
      </form>
    </div>
  );
};

export default PersonForm;

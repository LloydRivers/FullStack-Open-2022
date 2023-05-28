/*
Sometimes you have a function, and may want to extract the Return Type from it. This will give you whatever type the function returns, whether it has a direct return annotation or not. This can be especially useful when working with 3rd party libraries, reducing type duplication, mocking function responses, and inside generators where typescript can't infer the return value of a function invocation that is yielded.
*/

/*
In this part, we define a User type that represents an object with a name property. Then, we declare a function updateUser that takes two parameters: id of type number and user of type User. This function performs some API-related operations (indicated by the comment), and it returns an object with status and code properties.
*/

type User = {
  name: string;
};

const updateUser = (id: number, user: User) => {
  console.log({ id, user });
  // Do api stuff here

  return { status: "success", code: 200 };
};

/*
Here, we declare a function getResponseStatusCode that takes a single parameter response. The type of response is annotated using the ReturnType utility type. The ReturnType<typeof updateUser> extracts the return type of the updateUser function, which is the type of the object returned by that function.

The purpose of this getResponseStatusCode function is to retrieve the code property from the response object. By specifying ReturnType<typeof updateUser> as the type of response, we ensure that the response argument should have the same type as the return type of the updateUser function.
*/
const getResponseStatusCode = (response: ReturnType<typeof updateUser>) => {
  return response.code;
};

/*
Finally, we invoke the updateUser function twice, passing different arguments. The returned objects are stored in response1 and response2 variables. Then, we call the getResponseStatusCode function with response1 and response2 as arguments.

The getResponseStatusCode function retrieves the code property from the response objects, which matches the return type of the updateUser function.

By using the ReturnType utility type, we can ensure type safety and catch potential errors when working with functions that have specific return types, even if those return types are not explicitly annotated.
*/
const response1 = updateUser(1, { name: "John" });
const response2 = updateUser(2, { name: "Jane" });

getResponseStatusCode(response1);
getResponseStatusCode(response2);

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

/**
 This function fetches the data of Luke Skywalker from the Star Wars API.
 It returns a Promise that resolves to a LukeSkywalker object.
 */
export const fetchLukeSkywalker = (): Promise<LukeSkywalker> => {
  // Use the fetch function to make a GET request to the API endpoint
  return (
    fetch("https://swapi.dev/api/people/1")
      // Use the .then() method to handle the response and convert it to JSON
      .then((res) => res.json())
      // Use another .then() callback to access the data and specify its type
      .then((data: LukeSkywalker) => data)
  );
};

/*
In this code snippet:

The LukeSkywalker interface is defined to specify the structure of the Luke Skywalker object.

The fetchLukeSkywalker function is documented as a function that fetches the data of Luke Skywalker from the Star Wars API. It returns a Promise that resolves to a LukeSkywalker object.

The fetch function is used to make a GET request to the specified API endpoint.

The response is handled using the .then() method, which converts the response to JSON.

Another .then() callback is used to access the resulting data and specify its type as LukeSkywalker.

Finally, the data is returned, and since the function returns a Promise, the resolved value will be a LukeSkywalker object.
*/

import axios, { AxiosResponse } from "axios";

// Define an interface for the todo object
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Immediately-Invoked Function Expression (IIFE)
(async () => {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos: Todo[] = response.data;

    // Log the retrieved todos
    console.log("Todos:", todos);
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }
})();

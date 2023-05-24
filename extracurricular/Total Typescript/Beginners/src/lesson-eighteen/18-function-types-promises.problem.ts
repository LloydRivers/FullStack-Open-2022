interface User {
  id: string;
  firstName: string;
  lastName: string;
}
type GetUser = (id: string) => Promise<User>;
export const createThenGetUser = async (
  createUser: () => Promise<string>,
  getUser: GetUser
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

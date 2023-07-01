export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:4500/login", {
        email,
        password,
      });
    } catch ({ message }) {
      console.warn(message);
    }
  };
}

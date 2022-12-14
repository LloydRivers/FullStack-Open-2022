// Redux
import { useSelector } from "react-redux";
import { selectUsers } from "features/slices/userSlice";

// Router
import { Link } from "react-router-dom";

// Material UI
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const Users = () => {
  const users = useSelector(selectUsers);

  return (
    <div>
      <h2>Users</h2>
      <TableContainer sx={{ minWidth: 250 }} component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>name</strong>
              </TableCell>
              <TableCell align="right">
                <strong>blogs created</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Link to={`/users/${user.id}`}>{user.username}</Link>
                </TableCell>
                <TableCell align="right">{user.blogs.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;

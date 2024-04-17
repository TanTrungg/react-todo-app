import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RandomColor from "../../utils/HOC/RandomColor";
import { connect } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";

function Home(props) {
  const navigate = useNavigate();
  const { dataRedux } = props;

  useEffect(() => {
    // const timeout = setTimeout(() => {
    //   console.log("check time out");
    //   //navigate("/to-do");
    // }, 3000);
    // return () => clearTimeout(timeout);
  }, [navigate]);

  const handleAdd = () => {
    props.addUserRedux();
  };

  const handleDelete = (user) => {
    props.deleteUserRedux(user);
  };

  console.log("check props", dataRedux);
  return (
    <div
      style={{
        padding: "auto",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={handleAdd}
        variant="contained"
        style={{ margin: "20px" }}
      >
        Add
      </Button>
      <TableContainer
        style={{ margin: "10px 0 50px 0" }}
        component={Paper}
        sx={{ maxWidth: 850 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ maxWidth: 10 }} align="center">
                ID
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Tools</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRedux &&
              // eslint-disable-next-line array-callback-return
              dataRedux.map((user) => {
                return (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{user.id}</TableCell>
                    <TableCell component="th">{user.name}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => handleDelete(user)}
                        variant="outlined"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "ADD_USER" }),
  };
};

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomColor(Home));

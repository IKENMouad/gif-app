import { useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../shared/Loading";
import { useHistory } from "react-router-dom";
import UserAction from "../../../actions/user.action";

const UserList = () => {
 // actions 
 const userAction = new UserAction();
 

  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.user);
  const history = useHistory();

  useEffect(() => {
    dispatch(userAction.fetchedUsersAction());
  }, [dispatch]);

  const handleDetailsUser = ({ _id: id }: { _id: any }) => {
    history.push("/users/" + id);
  };

  return (
    <div>
      {userState.users && userState.isLoaded ? (
        <Tabs
          defaultActiveKey="user"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="user" title="users">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>createdAt</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userState.users.map((user: any, index: number) => (
                  <tr key={index}>
                    <td> {user.name}</td>
                    <td> {user.email}</td>
                    <td> {user.mobile}</td>
                    <td> {user.createdAt} </td>
                    <td
                      className="pointer-cursor"
                      onClick={(e) => handleDetailsUser(user)}
                    >
                      details
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="role" title="Role">
            profile
          </Tab>
        </Tabs>
      ) : (
        <Loading error={userState.error} />
      )}
    </div>
  );
};
export default UserList;

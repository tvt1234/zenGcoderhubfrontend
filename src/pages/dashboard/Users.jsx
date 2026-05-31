const Users = () => {
  return (
    <>
      <h1>User Management</h1>

      <button>Add User</button>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>
            <td>Student</td>

            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Users;

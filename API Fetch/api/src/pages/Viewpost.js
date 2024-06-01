import React from "react";

const Viewpost = () => {
  const [users, setUsers] = useState < number > [];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-center">Users</h1>
      {users.map((user) => (
        <div className="bg-black">
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <button>View Post</button>
          <button>Posts</button>
        </div>
      ))}
    </>
  );
};

export default Viewpost;

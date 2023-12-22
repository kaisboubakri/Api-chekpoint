import React, { useState, useEffect } from "react";
import axios from "axios";
function UserList() {
const [listOfUsers, setListOfUsers] = useState([]);
useEffect(() => {
const fetchData = async () => {
const result = await axios.get(
"https://jsonplaceholder.typicode.com/users"
);
setListOfUsers(result.data);
console.log(result);
};
fetchData();
},[]);
return (
<div>
<h1 style={{display:'flex'}}>User List</h1>

{listOfUsers.map((user) => (
<h3 style={{color:'red' , display:'flex'}}>{user.name}</h3>
))}

</div>
);
}
export default UserList;
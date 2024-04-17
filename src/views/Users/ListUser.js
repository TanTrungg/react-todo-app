// import React from "react";
// import axios from "axios";
// import "./user.scss";
// import { useNavigate } from "react-router-dom";
// class ListUser extends React.Component {
//   state = {
//     listUser: [],
//   };

//   async componentDidMount() {
//     //promise
//     // axios.get("https://reqres.in/api/user?page=2").then((res) => {
//     //   console.log(">>>Response", res.data.data);
//     // });

//     let res = await axios.get("https://reqres.in/api/users?page=2");

//     this.setState({
//       listUser: res && res.data && res.data.data ? res.data.data : [],
//     });
//   }

//   handleViewDetail = (user) => {
//     this.props.history.push(`/user/${user.id}`);
//   };

//   render() {
//     let { listUser } = this.state;
//     return (
//       <div className="user-container">
//         <div className="title">Fetch all user</div>

//         <div className="list-user">
//           {listUser && listUser.length > 0 ? (
//             listUser.map((user, index) => {
//               return (
//                 <li key={user.id} onClick={() => this.handleViewDetail(user)}>
//                   {index + 1} - {user.first_name} {user.last_name}
//                 </li>
//               );
//             })
//           ) : (
//             <div>
//               <p>Không tìm thấy user</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default ListUser;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import hook useNavigate
import "./user.scss";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://reqres.in/api/users?page=2");
        setListUser(res?.data?.data || []);
      } catch (error) {
        console.log("API error", error);
      }
    };

    fetchData();
  }, []);

  const handleViewDetail = (userId) => {
    navigate(`${userId}`); // Chuyển hướng đến trang chi tiết user
  };

  return (
    <div className="user-container">
      <div className="title">Fetch all user</div>
      <div className="list-user">
        {listUser.length > 0 ? (
          listUser.map((user, index) => (
            <li key={user.id} onClick={() => handleViewDetail(user.id)}>
              {index + 1} - {user.first_name} {user.last_name}
            </li>
          ))
        ) : (
          <div>
            <p>Không tìm thấy user</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListUser;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";

const DetailUser = () => {
  // Truy cập vào tham số id từ props
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const callApi = async () => {
    try {
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      if (res && res.data && res.data.data) {
        setUser(res.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("API error", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    callApi();
  });

  console.log("location", location);

  return (
    <>
      <div>Details Users</div>
      {/* {user && ( // Kiểm tra xem user có tồn tại không trước khi hiển thị
        <div>
          <div>
            {user.first_name} {user.last_name}
          </div>
          <div>{user.email}</div>
          <div>
            <img src={user.avatar} alt={`Avatar user ${user.last_name}`} />
          </div>
        </div>
      )} */}
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            {user.first_name} {user.last_name}
          </div>
          <div>{user.email}</div>
          <div>
            <img src={user.avatar} alt={`Avatar user ${user.last_name}`} />
          </div>
        </div>
      )}

      <button onClick={() => handleBack()}>Back</button>
    </>
  );
};

export default DetailUser;

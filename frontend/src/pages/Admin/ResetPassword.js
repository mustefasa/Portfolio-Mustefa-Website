import React from "react";
import { message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

function ResetPassword() {
  const [username, setUsername] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const dispatch = useDispatch();

  const resetPassword = async () => {
    if (newPassword !== confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/reset-password", {
        username,
        newPassword,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token",JSON.stringify(response.data));
        window.location.href="/admin-login";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white">
        <h1 className="text-2xl">Portfolio - Reset Password</h1>
        <hr />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className="bg-primary text-white p-2" onClick={resetPassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;

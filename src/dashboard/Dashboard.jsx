import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";

import { Navbar } from "./navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Dashboard2 from "../dashboard2/Dashboard2"

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isError } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <div>
      <Dashboard2 />
    </div>
  );
};

export default Dashboard;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { show } from "../features/notificationSlice";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = "http://32182.fullstack.clarusway.com/";

  const register = async (userInfo) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      console.log(data);
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      dispatch(show({ message: "Login Success", status: "success" }));
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart);
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      console.log("1");
      dispatch(logoutSuccess());
      console.log("2");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail);
    }
  };
  return { register, login, logout };
};

export default useAuthCall;

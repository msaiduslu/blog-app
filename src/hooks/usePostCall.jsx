import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  postFetchFail,
  postFetchStart,
  setPostList,
} from "../features/postSlice";

const usePostCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = "http://32182.fullstack.clarusway.com/api/";
  const { token } = useSelector((state) => state.auth);

  const getPostList = async () => {
    dispatch(postFetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}blogs/`);
      dispatch(setPostList(data));
    } catch (error) {
      dispatch(postFetchFail());
    }
  };

  const likesCreate = async (id) => {
    dispatch(postFetchStart());
    try {
      await axios.post(`${BASE_URL}likes/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log("like");
    } catch (error) {
      dispatch(postFetchFail());
    }
  };
  return { getPostList, likesCreate };
};
export default usePostCall;

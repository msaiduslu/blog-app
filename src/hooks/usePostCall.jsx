import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  postFetchFail,
  postFetchStart,
  setCategoryList,
  setPostList,
  setUserPosts,
} from "../features/postSlice";
import { show } from "../features/notificationSlice";

const usePostCall = () => {
  const { userId } = useSelector((state) => state.auth);
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
  const getCategoryList = async () => {
    dispatch(postFetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}categories/`);
      dispatch(setCategoryList(data));
    } catch (error) {
      dispatch(postFetchFail());
    }
  };

  const likesCreate = async (id) => {
    dispatch(postFetchStart());
    try {
      await axios({
        method: "POST",
        url: `${BASE_URL}likes/${id}/`,
        headers: { Authorization: `Token ${token}` },
      });
      await getPostList();
      await getUserPosts(userId);
    } catch (error) {
      dispatch(postFetchFail());
    }
  };

  const postCreate = async (info) => {
    dispatch(postFetchStart());
    try {
      await axios({
        method: "POST",
        url: `${BASE_URL}blogs/`,
        headers: { Authorization: `Token ${token}` },
        data: info,
      });
      console.log("1");
      dispatch(
        show({ message: "Post created successfuly", status: "success" })
      );
      console.log("2");
    } catch (error) {
      dispatch(postFetchFail());
      dispatch(show({ message: "Post create failed", status: "error" }));
    }
  };

  const getUserPosts = async (userId) => {
    dispatch(postFetchStart());
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}blogs/?author=${userId}`,
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(setUserPosts(data));
    } catch (error) {
      dispatch(postFetchFail());
    }
  };

  return {
    getPostList,
    likesCreate,
    getCategoryList,
    postCreate,
    getUserPosts,
  };
};
export default usePostCall;

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  postFetchFail,
  postFetchStart,
  postFetchSuccess,
  setCategoryList,
  setPostDetail,
  setPostList,
  setUserPosts,
} from "../features/postSlice";
import { show } from "../features/notificationSlice";

const usePostCall = () => {
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const BASE_URL = "https://32182.fullstack.clarusway.com/api/";
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
      dispatch(postFetchSuccess());
      dispatch(
        show({ message: "Post created successfuly", status: "success" })
      );
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
  const getPostDetail = async (postId) => {
    dispatch(postFetchStart());
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}blogs/${postId}`,
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(setPostDetail(data));
    } catch (error) {
      dispatch(postFetchFail());
    }
  };
  const postUpdate = async (postId, info) => {
    dispatch(postFetchStart());
    try {
      await axios({
        method: "PUT",
        url: `${BASE_URL}blogs/${postId}/`,
        headers: { Authorization: `Token ${token}` },
        data: info,
      });
      dispatch(postFetchSuccess());
      show({ message: "Post updated successfuly", status: "success" });
      await getPostDetail(postId);
    } catch (error) {
      dispatch(postFetchFail());
      dispatch(show({ message: "Post update failed", status: "error" }));
    }
  };
  const commentCreate = async (postId, infoComment) => {
    dispatch(postFetchStart());
    try {
      await axios({
        method: "POST",
        url: `${BASE_URL}comments/${postId}/`,
        headers: { Authorization: `Token ${token}` },
        data: infoComment,
      });
      dispatch(postFetchSuccess());
      show({ message: "Comment added successfuly", status: "success" });
      await getPostDetail(postId);
    } catch (error) {
      dispatch(postFetchFail());
      dispatch(show({ message: "Comment add failed", status: "error" }));
    }
  };
  const postDelete = async (postId) => {
    dispatch(postFetchStart());
    try {
      await axios({
        method: "DELETE",
        url: `${BASE_URL}blogs/${postId}/`,
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(postFetchSuccess());
      show({ message: "Post deleted successfuly", status: "success" });
    } catch (error) {
      dispatch(postFetchFail());
      dispatch(show({ message: "Post delete failed", status: "error" }));
    }
  };

  return {
    getPostList,
    likesCreate,
    getCategoryList,
    postCreate,
    getUserPosts,
    getPostDetail,
    postUpdate,
    postDelete,
    commentCreate,
  };
};
export default usePostCall;

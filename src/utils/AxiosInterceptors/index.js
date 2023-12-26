import store from "../../store";
import { uiActions } from "../../store/ui-slice";
import axios from "../axios";
import { genrateAccessToken } from "../function";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (
      error.response?.status === 403 &&
      error.response?.data?.refreshTokenDecoded &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      await genrateAccessToken();
      return axios(originalConfig);
    } else if (
      error.response?.status === 401 ||
      error.response?.status === 409 ||
      error.response?.status === 400
    ) {
      store.dispatch(
        uiActions.setSnackBar({
          status: true,
          message: error.response?.data?.text || "somthing went wrong",
          severity: "warning",
        })
      );
    }
    return Promise.reject(error);
  }
);

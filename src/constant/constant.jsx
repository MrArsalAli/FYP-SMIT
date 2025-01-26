const devURL = "http://localhost:4000";
const prodURL = "";

export const BASE_URL = devURL;

export const AppRoutes = {
  signup: BASE_URL + "/user/signup",
  login: BASE_URL + "/user/login",
  getCurrentUser: BASE_URL + "/user/currentUser",
  requests: BASE_URL + "/requests/addrequest",
  getAllRequests: BASE_URL + "/requests/getAllRequests",
  getAllUsers: BASE_URL + "/user/getAllUsers",
};

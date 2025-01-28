const devURL = "http://localhost:4000";
const prodURL = "https://fyp-smit-backe-production.up.railway.app/";

export const BASE_URL = prodURL;

export const AppRoutes = {
  signup: BASE_URL + "/user/signup",
  login: BASE_URL + "/user/login",
  getCurrentUser: BASE_URL + "/user/currentUser",
  requests: BASE_URL + "/requests/addrequest",
  getAllRequests: BASE_URL + "/requests/getAllRequests",
  getAllUsers: BASE_URL + "/user/getAllUsers",
  getUserRequests : BASE_URL + "/requests/getUserRequests"
};

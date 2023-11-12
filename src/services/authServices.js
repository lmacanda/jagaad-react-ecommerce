import axios from "../config/axiosConfig";

export const login = async (login, pass) => {
  try {
    const response = await axios.post("/auth/login", {
      login,
      pass
    });
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const refreshToken = async () => {
  try {
    let refreshToken = localStorage.getItem("refreshToken");

    const { data } = await axios.post("/auth/refresh", {
      refreshToken: refreshToken
    });

    localStorage.setItem("accessToken", data.access_token);
    localStorage.setItem("refreshToken", data.refresh_token);
  } catch (err) {
    console.error(err);
  }
};

export const testRequest = async () => {
  try {
    const response = await axios.post("/asdasdasd");
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
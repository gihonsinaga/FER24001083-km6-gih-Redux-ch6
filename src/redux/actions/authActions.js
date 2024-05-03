import axios from "axios";
import { setToken, setIsLoggedIn, setUser } from "../reducers/authReducers";
import toast from "react-hot-toast";

export const login = (data, navigate) => async (dispatch) => {
  try {
    // console.log("dataa 1", data);
    let config = {
      method: "post",
      url: "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log("response", response);
    const { token } = response.data.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    // dispatch(getMe(null, null, null));

    navigate("/LandingPage");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorr = error.response.data.message;
      // console.log("errorr", error.response.data.message);
      // dispatch(setError(errorr));
      alert(errorr);

      // console.log("error", error.response.data.message);
      return;
    }
    // alert(error.message);
  }
};

export const registerLoginWithGoogleAction =
  (accessToken, navigate) => async (dispatch) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://shy-cloud-3319.fly.dev/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));
      dispatch(setIsLoggedIn(true));
      dispatch(getMe(null, null, null));

      navigate("/LandingPage");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

export const register = (data, navigate) => async (dispatch) => {
  try {
    let config = {
      method: "post",
      url: "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    const { token } = response.data.data;

    // dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    // dispatch(getMe(null, null, null));

    if (response?.status === 201) {
      toast.success("Registration successful", {
        style: {
          border: "1px solid black",
          padding: "20px",
          color: "green",
          duration: 6000,
        },
        iconTheme: {
          primary: "green",
          secondary: "white",
        },
        duration: 10000,
      });
      alert("registration succesful");
      navigate("/Login");
    }
  } catch (error) {
    const errorr = error.response.data.message;
    // console.log("errorr", error.response.data.message);
    alert(errorr);

    console.error("Registration gagal :", error);
    // dispatch(setError(error.response.data.message));
    toast.error("Registration failed. Please try again", {
      style: {
        border: "1px solid black",
        padding: "20px",
        color: "red",
      },
      iconTheme: {
        primary: "red",
        secondary: "white",
      },
      duration: 6000,
    });
  }
};

export const getMe = () => async (dispatch, getState) => {
  // console.log("getState(", getState());
  try {
    const token = getState().auth.token;
    console.log("token state", token);
    const response = await axios.get(
      "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const userData = response.data;
    dispatch(setUser(userData));
  } catch (error) {
    // Handle error
    console.error("Error fetching user data:", error);
  }
};

export const logout = (navigate) => (dispatch) => {
  try {
    dispatch(setToken(null));
    dispatch(setIsLoggedIn(false));
    dispatch(setUser(null));

    // if (navigate) navigate("/");
  } catch (error) {
    alert(error?.message);
  }
};

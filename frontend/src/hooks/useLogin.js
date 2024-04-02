import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const data = { username, password };
      console.log(data);

      const response = await axios
        .post("http://localhost:8000/api/auth/login", data, {
          withCredentials: true,
        })

        .then((response) => {
          if (response.status === 200) {
            // handle successful login
            console.log("Login successful", response.data);
            toast.success("Logged in");
            localStorage.setItem("chat-user-info", JSON.stringify(data));
            //context
            setAuthUser(data);
          } else {
            throw new Error(response.statusText);
          }
        });

      // .catch((error) => {
      //   console.log("Error logging in", error);
      // });
    } catch (error) {
      // toast.error(error.message);
      toast.error("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Plz fill all the fields");
    return false;
  }
  return true;
}

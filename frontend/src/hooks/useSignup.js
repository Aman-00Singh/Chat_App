import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });

    setLoading(true);

    if (!success) {
      return;
    }
    // Now in this try we will right the logic of signup of the user  after all checks and validation performed successfully
    try {
      const data = {
        fullname,
        username,
        password,
        confirmpassword,
        gender,
      };

      const response = await axios
        .post("http://localhost:8000/api/auth/signup", data)

        .then(function (response) {
          console.log(response.data);
        })

        .catch(function (error) {
          console.log(error);
        });
      //local storage
      localStorage.setItem("chat-user-info", JSON.stringify(data));
      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Please input correct password");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be more than 6 charchters");
    return false;
  }

  return true;
}

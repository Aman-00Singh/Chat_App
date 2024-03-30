import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogout = () => {
  const [laoding, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      axios

        .post("http://localhost:8000/api/auth/logout", {
          withCredentials: true,
        })

        .then((response) => {
          if (response.status === 200) {
            // handle successful logout
          }
        })

        .catch((error) => {
          console.log("Error signing out", error);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    //local storage removal
    localStorage.removeItem("chat-user-info");
    //context state change
    setAuthUser(null);
  };
  return { logout, laoding };
};

export default useLogout;

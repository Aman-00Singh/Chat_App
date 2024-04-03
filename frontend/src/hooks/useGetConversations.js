import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const useGetConversations = () => {
  const [loading, setloading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setloading(true);
      try {
        const response = await axios.get(
          "http://localhost:8000/api/auth/users"
        );

        console.log(response.data);
        setConversations(response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;

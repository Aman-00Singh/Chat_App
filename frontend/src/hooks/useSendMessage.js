import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessage = async (message) => {
    setloading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/messages/send/${selectedConversation._id}`,
        {
          message,
        },
<<<<<<< HEAD
        { withCredentials: true }
=======
        {withCredentials: true}
>>>>>>> b21ce7255c8d272c6af2b6f1d899a97ec9dec0c1
      );

      const data = res.data;

      if (data.error) {
<<<<<<< HEAD
        console.log("some error");
=======
        console.log("some error")
>>>>>>> b21ce7255c8d272c6af2b6f1d899a97ec9dec0c1
      }

      setMessages([...messages, data]);
      toast.success("Message sent");
      console.log(data);
    } catch (error) {
      toast.error("some error");

    } finally {
      setloading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;

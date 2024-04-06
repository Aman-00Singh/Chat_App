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
        { withCredentials: true }
      );

      const data = res.data;

      if (data.error) {
        console.log("some error");
      }

      setMessages([...messages, data]);
      toast.success("Message sent");
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;

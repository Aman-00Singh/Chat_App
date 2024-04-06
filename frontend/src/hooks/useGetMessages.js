import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setloading(true);
      try {
        const res = await axios.get(`http://localhost:8000/api/messages/${selectedConversation._id}`
        , { withCredentials: true });
        setMessages(res.data.conversation.messages);
        console.log({messages});


      } catch (error) {
        toast.error("Failed to get messages, You have't selected any conversation yet.");
      } finally {
        setloading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation._id, setMessages]);
  return { messages, loading };
};

export default useGetMessages;

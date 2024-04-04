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
        const data = JSON.parse(localStorage.getItem("chat-user-info"));
        const { username } = data;
        const response = await axios.post(
          `http://localhost:8000/api/users`,
          { username },
          { withCredentials: true },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response.data);
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

// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";

// const useGetConversations = () => {
//   const [loading, setloading] = useState(false);
//   const [conversations, setConversations] = useState([]);

//   useEffect(() => {
//     const getConversations = async () => {
//       setloading(true);
//       try {
//         const response = await axios.get("http://localhost:8000/api/users", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("hii");

//         console.log(response.data);
//         setConversations(response.data);
//       } catch (error) {
//         toast.error(error.message);
//       } finally {
//         setloading(false);
//       }
//     };
//     getConversations();
//   }, []);
//   return { loading, conversations };
// };

// export default useGetConversations;

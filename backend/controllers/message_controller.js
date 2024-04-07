import Conversation from "../models/conversation_model.js";
import Message from "../models/message_model.js";
import User from "../models/user_model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const senderUser = await User.findById(senderId);
    const receiverUser = await User.findById(receiverId);

    let conversation = await Conversation.find({
      participants: { $all: [senderUser, receiverUser] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
      await conversation.save();
    }

    const newmessage = new Message({
      senderId: senderUser,
      receiverId: receiverUser,
      message: message,
    });

    // if (newmessage) {
    //   conversation.messages.push(newmessage._id);
    // }

    //SOCKET IO functionality to be added here

    // these below 2 runs .after completion of the first one,so we can optimize by using promise were both can run parallely
    // await conversation.save();
    // await newmessage.save();

    await newmessage.save();

    // await Promise.all([conversation.save(), newmessage.save()]);

    res.status(201).json({ newmessage });
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatid } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatid] },
    }).populate("messages"); //Not a refernce to msg but the actual msg

    if (!conversation) {
      return res.status(400).json(null);
    }
    res.json({ userToChatid, senderId, conversation });
    // const messages = conversation.messages;

    // res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

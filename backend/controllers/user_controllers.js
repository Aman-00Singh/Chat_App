import User from "../models/user_model.js";

export const getUsersforSideBar = async (req, res) => {
  try {
    const loggedInUserid = req.user._id;
    const allUsers_exceptU = await User.find({
      _id: { $ne: loggedInUserid },
    }).select("-password"); //this ne is used for giving all the users in sidebar except urself and if we want all including urself just write User.find().
    res.status(200).json(allUsers_exceptU);
  } catch (error) {
    console.log("Error in getUsersforSideBar controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

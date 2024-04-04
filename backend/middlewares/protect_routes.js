import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

export const protectroutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res
        .status(401)
        .json({ error: "Unauthorized NO token provided", request: req.body });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ error: "Unauthorized-Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protect middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

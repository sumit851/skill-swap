import { account } from "../../config/appwrite-sdk.js";

import User from "./userSchema.js";
class Authentication {
  static async register(req, res) {
    try {
      const { email, password, username } = req.body;
      if (!email || !password || !username) {
        return res.status(400).json({ message: "Please fill in all fields" });
      }

      const user = await account.create(ID.unique(), email, password, username);
      if (!user) {
        return res
          .status(400)
          .json({ message: "An error occurred while registering" });
      }
      const userId = user.$id;
      const pd = user.password;
      console.log(pd);
      const newUser = new User({
        // _id: userId,
        username: username,
        userId: userId,
      });
      await newUser.save();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Please fill in all fields" });
      }

      const loginUser = await account.createEmailPasswordSession(
        email,
        password
      );

      if (!loginUser) {
        return res
          .status(400)
          .json({ message: "An error occurred while logging in" });
      }
      res.cookie("sessionId", loginUser.$id, { httpOnly: true, secure: false });
      return res.status(200).json({
        message: "Logged in successfully",
        sessionId: loginUser.$id,
        userId: loginUser.userId,
      });
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }
}

export default Authentication;

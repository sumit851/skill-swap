import { account } from "../src/config/appwrite-sdk.js";

const Authenticate = async (req, res, next) => {
  try {
    const sessionId = req.cookies.sessionId;
    console.log("session id:", sessionId);

    if (!sessionId) {
      return res.status(401).json({ message: "No session ID provided" });
    }

    let session;
    try {
      session = await account.getSession("current");

      if (sessionId.$id === session.$id) {
        console.log("session:", session.$id);
        return res.status(200).json({ message: "Authorized" });
      }
    } catch (error) {
      console.log("error:", error.message);
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = {
      id: session.userId,
    };
    next();
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};
export default Authenticate;

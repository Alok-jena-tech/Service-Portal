const jwt = require("jsonwebtoken");
const Names = require("../modules/user-module");
const authoMiddleware = async (req, resp, next) => {
  const token = req.header("Authorization");
  // console.log(token,"tttttttt")
  if (!token)
    return resp
      .status(401)
      .json({ message: "unauthorised HTTP,token not provided" });
  const jwtoken = token.replace("Bearer ", "");
  // console.log(jwtoken)
  try {
    const isVarified = jwt.verify(jwtoken, process.env.JWT_SECRET_KEY);
    // console.log("verified data",isVarified);
    const userData = await Names.findOne({ email: isVarified.email }).select({
      password: 0,
    });
    // console.log("tt", userData);
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    return resp.status(401).json({ message: "unauthorized.invalid token" });
  }
};
module.exports = authoMiddleware;

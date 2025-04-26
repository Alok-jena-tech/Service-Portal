const Names = require("../modules/user-module");
const bcrypt = require("bcrypt");
const Home = async (req, resp) => {
  try {
    // const data=await Names.find()
    // console.log(data)
    resp.status(200).send("this is router home page");
  } catch (error) {
    resp.status(400).send("error.massege");
  }
};

const Register = async (req, resp) => {
  try {
    const { username, email, phone, password } = req.body;
// console.log("user data come from ft to bt to register",req.body)
    const emailexist = await Names.findOne({ email });

    if (emailexist) return resp.status(401).json({ message: "user is already exist" });
    
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const userData = { username, email, password: hashPassword, phone };

    const userCreated = await Names.create(userData);

    // console.log(ndata);
    resp.status(200).json({
      message: " user registered succesfully"
      
      
    });
  } catch (error) {
    // console.log("",error)
    // alert(error)
    // const err = {
    //   status: 400,
    //   message: error.message,
    // };
    resp.status(400).json({message:"user could not registered "
    });
    // next(err);
  }
};

const login = async (req, resp) => {
  try {
    const { email, password } = req.body;
    // console.log("login data com from ft to bt for login",req.body)
    const userExist = await Names.findOne({ email });

    if (!userExist) {
      return resp.status(400).json({ message: "user is not exist" });
    }
    // const validUser =  userExist.comparePassword(password);
    const response = await bcrypt.compare(password, userExist.password);
    if (!response)
      return resp.status(400).json({ message: "invalid Authontication" });

    // ethi sahi password thile bhi true asuni only false asuchhi tenu recheck akriba.
    // ethi await lageibaku heb as compare karibaku tike lagi pare
    // console.log(response);
    if (response) {
      resp.status(200).json({
        message: "login succesfullll",
        userid: userExist._id.toString(),
        token: await userExist.userToken(),
      });
    } else {
      resp.status(401).json({ message: "invalid Authontication" });
    }

    // resp.json({mg:req.body});
    // console.log(validUser);
  } catch (error) {
    
    resp.status(400).json({message:"login unsuccessful"});
  }
};

// user data import
const user = (req, resp) => {
  try {
    resp.status(200).json(req.user);
    // console.log("user data in autho-contr in backend",req.user)
  } catch (eror) {
    resp.json({ msg: `this is user control eror ${eror}` });
  }
};
module.exports = { Home, Register, login, user };

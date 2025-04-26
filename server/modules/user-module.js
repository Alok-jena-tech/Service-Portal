const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// userSchema.pre("save", async function (next) {
//   // this
//   // console.log("kkk", this);
//   const user = this;
//   if (!user.isModified("password")) {
//     next();
//   }
//   try {
//     const saltRound = 11;
//     // await bcrypt.genSalt(10);
//     const hash_password = await bcrypt.hash(user.password, saltRound);
//     user.password = hash_password;
//     // console.log("hash", user.password, hash_password);
//   } catch (err) {
//     next(err);
//   }
// });

// json token
userSchema.methods.userToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (err) {
    console.error("this is token aror", err);
  }
};

// userSchema.methods.comparePassword = async function (password) {
//   return  bcrypt.compare(this.password, password)
  //   , (err, result) => {
  //   if (err) throw err;
  //   if (result) {
  //     console.log("password matched!");
  //   } else {
  //     console.log("invalid passwors " + this.password + " and " + password);
  //   }
  // });
// };
const Names = new mongoose.model("Name", userSchema);
module.exports = Names;

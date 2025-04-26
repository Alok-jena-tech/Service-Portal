const Names = require("../modules/user-module");
const ContactData = require("../modules/contact-module");
const getAllUsers = async (req, resp) => {
  try {
    const userData = await Names.find().select({ password: 0 });
    // console.log(userData)
    if (!userData || userData.length === 0) {
      return resp
        .status(404)
        .json({ message: "no user founr in names collection" });
    }
    return resp.status(200).json(userData);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const getAllContacts = async (req, resp) => {
  try {
    const contacts = await ContactData.find();
    if (!contacts || contacts === 0) {
      return resp.status(404).json({ message: "no contact data found" });
    }
    return resp.status(200).json(contacts);
  } catch (eror) {
    next(eror);
  }
};

const deleteUserById=async(req,resp)=>{
  try{
const id=req.params.id
console.log("this is id:",id)
await Names.deleteOne({_id:id});
return resp.status(200).json({message:"user deleted succesfully"})
  }catch(eror){
    // next(eror)

return resp.status(400).json({message:"user couldn't delete"})  }
}

// get single user data
const getUserById=async(req,resp)=>{
try{
const id=req.params.id
const data= await Names.findOne({_id:id},{password:0});
// console.log("single data is :",data)
return resp.status(200).json(data);
}catch(error){
  next(error)
}
}

// / user update logic
const updateUserById=async(req,resp)=>{
  try{
    const id=req.params.id;
    const updateUserData=req.body
    // console.log("this is come for update",updateUserData)
    const updateData=await Names.updateOne({_id:id},{$set:updateUserData})
    return resp.status(200).json({"mess":updateData})
  }catch(error){
    next(error)
  }
}

const deleteContactById=async(req,resp)=>{
  try{
    const id=req.params.id
    // console.log("this is id in delete server",id)
    await ContactData.deleteOne({_id:id})
return resp.status(200).json({message:"contact deleted succssfully"})
  }catch(eror){
    return resp.status(400).json({message:"contact did not delete"})

  }
}
module.exports = { getAllUsers, getAllContacts,deleteUserById ,getUserById,updateUserById,deleteContactById};

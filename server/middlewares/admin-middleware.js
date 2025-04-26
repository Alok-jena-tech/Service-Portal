const adminMiddleware = async (req, resp, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if(!adminRole){
        return resp.status(403).json({message:"Access denied.user is not an admin"})
    }
    // console.log("this is admin role", adminRole);
    next()
  } catch (error) {
    next(error);
  }
};


module.exports=adminMiddleware;
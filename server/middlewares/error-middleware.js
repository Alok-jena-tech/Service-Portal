const errorMiddlewre=(err,req,resp,next)=>{
    const status=err.status || 500;
    const message=err.message || "this may be beckend error";
    const extraDetails=err.extraDetails || "this error from backend";

    return resp.status(status).json({message,extraDetails});

};

module.exports=errorMiddlewre;
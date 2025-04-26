const mongoose=require("mongoose");
const URL=process.env.MONGODB_URI;
const connectDb=async()=>{
    try{
       await mongoose.connect(URL);
console.log("succesfully connect with dbs");

    }catch(error){
console.log("dbs is not conntected");
process.exit();
    }
// await mongoose.connect(URL).then((a)=>{
//     console.log(a)
// }).catch((e)=>{
//     console.log(e)
// })
}

module.exports=connectDb;
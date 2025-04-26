
const {Schema,model} =require("mongoose");
const serviceSchems=new Schema({
    service:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    }
})

const Myservice=new model("Myservice",serviceSchems);

module.exports=Myservice;

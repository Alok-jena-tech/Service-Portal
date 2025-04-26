require("dotenv").config();
const express =require("express")
const connectDb=require("./utils/db")
const app=express();
const cors=require("cors")
const authRouter=require("./router/autho-router")
const contactRouter=require("./router/contact-router");
const errorMiddlewre=require("./middlewares/error-middleware");
const serviceRouter=require("./router/service-router")
const adminRouter=require("./router/admin-router")
app.use(express.json());
const corsOPtion={
    origin:"http://localhost:5173",
    methods:"POST,GET,PUT,DELETE,PATCH,HEAD",
    credentials:true
}

app.use(cors(corsOPtion))


app.use("/api/admin",adminRouter);
app.use("/api/autho",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/data",serviceRouter)
app.use(errorMiddlewre);
const PORT=5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("hello ,this run on 5000 portal")})
})

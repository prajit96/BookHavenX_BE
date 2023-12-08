const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/userRoute");
const { bookRouter } = require("./routes/bookRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/books", bookRouter)

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to BookHavenX Backend")
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connect to the DB");
        console.log(`server is running at port ${process.env.port}`);
    }catch(err){
        console.log(err);
        console.log("Something Went Wrong!!!");
    }
})
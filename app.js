const express = require("express")
const mongoose = require("mongoose")
const dotEnv = require("dotenv")
const routes = require("./routes/shoeRoutes")
const app = express()
const methodOverride = require('method-override');  

dotEnv.config()

//middleware
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/", routes)


//view engine
app.set("view engine", "ejs")
app.set("views", "render")


//connect
// const port = 3000
// app.listen(port, ()=>{
//     console.log(`Connected to port: ${port}`)
// })

var port_number = process.env.PORT || 3000;
app.listen(port_number, ()=>console.log(`PORT: ${port_number}`));


// mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
//     if(err) throw err
//     console.log("Connected")
// })
mongoose.connect(process.env.DB_CONNECT , ()=>{
    console.log(`Connected to Database. \nPlease check DB_CONNECT to verify connection.`)
})
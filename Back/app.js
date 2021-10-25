const express = require ("express")
const app = express()
const cors = require ("cors")
const mongoose = require ("mongoose")

require('dotenv').config()


//Bases de datos
mongoose.connect(
    process.env.DB_URL,
    () => console.log("conect"))

const db= mongoose.connection;
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Conectado a BB.DD"))


//Import Routes

const itemsRoutes = require("./routes/items")
const imgRoutes = require("./routes/img")
const ordersRoutes = require("./routes/orders")




// MIDDLEWARE
app.use(cors())
app.use(express.json())

app.use("/items",itemsRoutes)
app.use("/img",imgRoutes)
app.use("/order",ordersRoutes)
app.use(express.static(__dirname + '/Front/index.html'));



//Rutas
app.get('/', (req, res) => {
    res.send("Home")
  })

  app.get('*', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
  });


//ITEMS


//IMAGES


//Start
app.listen(3000);


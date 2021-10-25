const express =require("express")
const router = express.Router()

//MODELS
const Item = require("../models/item")




// Get itams

router.get("/", async (req, res) =>{
    try{
        const itemsFromDB = await Item.find()
        res.json (itemsFromDB)
    }catch(err){
        res.json({message: err.message})
    }
});

// CREATE ITEM
router.post("/",async (req, res) =>{
    console.log(req.body)
    const item = new Item({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
    }) 
    try{
        const newItem = await item.save()
        res.json(newItem)

    }catch(err){
        res.json({message: err.message})

    }

})

module.exports= router
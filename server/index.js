const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }));
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const ModelsSchema = new mongoose.Schema({
    name:String,
   parag:String,
    imageURL:String
  });
  const MyModel = mongoose.model('homes',ModelsSchema);

  DB_PASSWORD=process.env.DB_PASSWORD
DB_CONNECTION=process.env.DB_CONNECTION
DB_CONNECTION=DB_CONNECTION.replace("<password>",DB_PASSWORD)
// console.log(DB_CONNECTION);
  mongoose.connect(DB_CONNECTION)
  .then(() => console.log('Connected!'));


app.get('/api/cards', async(req,res)=>{
    const {name}=req.query
    let datas= await MyModel.find()
    if(name === undefined){
        res.status(200).send({
            data:datas,
            message:"sucsses datas"
        })
    }
    else{
        res.status(200).send({
data:datas.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
message:"sucsses datas"
        })
    }

})

app.get('/api/cards/:id',async(req,res)=>{
    let id=req.params.id
    const cards=await MyModel.findById(id)
    if(!cards){
        res.status(204).send("don't found")
    }else{
        res.status(200).send({
            data:cards,
            message:"sucsses datas"
        })
    }
})
app.delete('/api/cards/:id',async(req,res)=>{
    let id=req.params.id
    const deleted=await MyModel.findByIdAndDelete(id)
    if(deleted===undefined){
        res.status(404).send("don't found")
    }else{
        res.status(204).send({
            data:deleted,
            message:"sucsses datas"
        })
    }
})

app.post('/api/cards',async(req,res)=>{
    const {imageURL,name, parag}=req.body
let  news= new MyModel({
    imageURL:imageURL,
    parag:parag,
    name:name
})
await news.save()
res.status(201).send(news)
})

app.put('/api/cards/:id',async(req,res)=>{
    let id =req.params.id
    const {imageURL,name, parag}=req.body
    let updated=await MyModel.findByIdAndUpdate(id,{ imageURL:imageURL,parag:parag,name:name})
    if(updated===undefined){
        res.status(404).send("don't found")

    }else{
res.status(200).send(`card: ${updated.name}`)

    }
})



  PORT  = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})



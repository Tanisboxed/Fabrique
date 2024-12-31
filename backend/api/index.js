const express= require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;
const mongoose = require("mongoose")
const productRoutes= require('./routes/products')

app.use(express.json())
//connecting db
mongoose.connect(process.env.MONGOOSEDB_RUL).then(()=>console.log("db connected")).then((err)=>{
    console.error('Database connection failed:', err.message);
})

app.use('/api/products', productRoutes);

app.use((err, req, res,next)=>{
    res.status(500).json({error:err.message});
});

app.listen(PORT || 9000, ()=>{
    console.log(`server listening on port ${PORT}`);
})















//test route
//app.get("/api/products",(req,res) => {
//    res.json(products);
// });
//app.get("/api/products/:id", (req, res) => {
//    const product = products.find(product)=> product.id == req.params.id)
//    res.json(product);
// })















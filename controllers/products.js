
const Product =require('../model/products');

const getAllProducts =async(req,res)=>{
    const allProduct = await Product.find()
    res.status(200).json({allProduct});
};


const getAllProductsTesting =async(req,res)=>{
};




const addProducts =async(req,res)=>{
    res.status(200).json({msg:'I am addProducts'})
    const products = await Product.insertMany()
};

module.exports = {getAllProducts, getAllProductsTesting,addProducts};


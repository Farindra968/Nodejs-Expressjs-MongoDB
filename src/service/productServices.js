// Database related work
import Product from "../modules/product.js";

// Get all product data
const getAllProduct = async (query) => {
  // filtering 
  const sort = JSON.parse(query.sort || "{}") // filtering product by sort
  const limit = query.limit // filtering product by limit
  const offsets = query.offsets // filtering product by offsets
  const filter = {} 

  console.log(query)
  const { name, category, brand, min, max } = query;

  // filtering product by name
  if (name) filter.name = { $regex: name, $options: "i" }
  
  // filtering product by Multiple category items e.g: [Smartphone, Watch ]
  if (category) {
    const categoriesItems = category.split(",")
    filter.category = { $in: categoriesItems }
  }

  // filtering product by Multiple brand items e.g: [Apple, Samsung ]
  if (brand) {
    const brandItems = brand.split(",")
    filter.brand = { $in: brandItems }
  }

  // filtering product by price min and max
  if (min) filter.price = { $gte: parseFloat(min) }
  if (max) filter.price = { 
    ...filter.price, // without replacing min parice
    $lte: parseFloat(max)
   };
  
  return await Product.find(filter).sort(sort).limit(limit).skip(offsets);
};

// Get Product Category List
const getProductCategoryList = async () => {
  return await Product.distinct("category");
}

// Get Product Brand LIst 
const getProductBrandList = async ()=> {
  const brandList = await Product.distinct("brand");
  return brandList
}

// Get Product By Category
const getProductCategoryItems = async (categoryItems) => {
  return await Product.find({category: categoryItems});
};

// Get Product By Brand
const getProductBrandItems = async (brandItems) => {
  return await Product.find({brand: brandItems});
};

// Get product by Merchant 
const getProductOfMerchant = async (merchant) => {
  return await Product.find({createdBy: merchant})
}

//Get Single Product Data
const getProductbyID = async (id) => {
  console.log(id);
  return await Product.findById(id); /// Getting product by id
};

/// Add product (Post Method)
const addProduct = async (data, userID) => {
  const productData = await Product.create({
    name: data.name,
    price: data.price,
    category: data.category,
    stock: data.stock,
    brand: data.brand,
    images: data.images,
    createdBy: userID,
  });
  return productData;
};

// Deleting Product (Delete Method)
const deleteProductbyId = async (id) => {
  return await Product.findByIdAndDelete(id); // deleting user by user id
};

/// Update Product (put method)
const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
  })
}



export default { getAllProduct, getProductCategoryList, getProductCategoryItems, getProductBrandList, getProductBrandItems, getProductOfMerchant, getProductbyID, addProduct, deleteProductbyId, updateProduct };

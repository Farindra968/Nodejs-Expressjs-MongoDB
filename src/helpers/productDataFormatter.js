
const productDataFormatter = (data) => {
    return {
        id: data._id,
        name: data.name,
        category: data.category,
        brand: data.brand,
        price: data.price,
        stock: data.stock,
        images: data.images,
        createdBy: data.createdBy,
        createdAt: data.createdAt,
    }
}

export default productDataFormatter

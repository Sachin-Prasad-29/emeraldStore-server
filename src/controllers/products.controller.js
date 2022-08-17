const getAllProducts = async (req, res, next) => {
    res.status(201).json({ status: 'success received' });
    
}

module.exports = {
    getAllProducts
}
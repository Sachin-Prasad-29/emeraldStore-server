const contactUs = async (req, res, next) => {
    const data = req.body
    res.status(201).json({ status: 'success sent', data: data });
    
}

module.exports = {
    contactUs
}
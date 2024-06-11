const handleHome = async (req, res)=>{
    res.send({msg: "API Working"})
}

module.exports = {
    handleHome,
}
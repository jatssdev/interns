let Category = require('../models/category')
let addNewCategory = async (req, res) => {
    try {
        let newCategory = Category({
            category: req.body.category
        })
        let result = await newCategory.save()
        if (!result) throw 'Error : databse Error'
        res.send({
            success: true,
            message: 'new category added'
        })

    } catch (e) {
        res.send({ success: false, message: e })
    }


}
module.exports = { addNewCategory }
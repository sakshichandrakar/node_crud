const database = require('../utils/database');
const Blogs = require('../models/blogs');

exports.getData = (req,res)=>{
    Blogs.fetchData()
    .then((data)=>{
        res.send(data);
    });
}

exports.postData = (req, res) => {
    const { category_name, is_active, is_deleted } = req.body;

    Blogs.insertData(category_name, is_active, is_deleted)
        .then((data) => {
            res.status(200).send({ message: 'Category added successfully', data });
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error adding category', error });
        });
};
// Route to delete a category by ID

exports.deleteData = (req, res) => {
    const { id } = req.params;

    Blogs.removeData(id)
        .then((data) => {
            if (data[0].affectedRows === 0) {
                return res.status(404).send({ message: 'Category not found' });
            }
            res.status(200).send({ message: 'Category deleted successfully' });
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error deleting category', error });
        });
};

exports.updateData = (req, res) => {
    const { id } = req.params;
    const { category_name, is_active, is_deleted } = req.body;

    Blogs.updatedData(id, category_name, is_active, is_deleted)
        .then((data) => {
            if (data[0].affectedRows === 0) {
                return res.status(404).send({ message: 'Category not found' });
            }
            res.status(200).send({ message: 'Category updated successfully' });
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error updating category', error });
        });
};






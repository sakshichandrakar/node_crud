const pool = require('../utils/database');

module.exports = class Blogs{
    static fetchData(){
        return pool.execute("Select * from blog_category");
    }
    // insert data 
    static insertData(category_name, is_active, is_deleted) {
        const query = "INSERT INTO blog_category (category_name, is_active, is_deleted) VALUES (?, ?, ?)";
        return pool.execute(query, [category_name, is_active, is_deleted]);
    }

    // delete data 
    static removeData(id) {
        const query = "DELETE FROM blog_category WHERE id = ?";
        console.log(query);
        return pool.execute(query, [id]);
    }

    // update data 
    static updatedData(id, category_name, is_active, is_deleted) {
        const query = "UPDATE blog_category SET category_name = ?, is_active = ?, is_deleted = ? WHERE id = ?";
        return pool.execute(query, [category_name, is_active, is_deleted, id]);
    }
}
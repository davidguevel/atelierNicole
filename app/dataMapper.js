const client = require('./database');


const dataMapper = {
    getAllProducts: (callback) => {
        const SQL_query = 'select * from "product_list"';
client.query(SQL_query, callback)

    },

}

module.exports = dataMapper
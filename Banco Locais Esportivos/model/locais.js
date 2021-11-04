
module.exports = {
    getLocais : function (connection, callback){
        let sql = 'select * from locais';
        connection.query(sql, callback);
    }

}
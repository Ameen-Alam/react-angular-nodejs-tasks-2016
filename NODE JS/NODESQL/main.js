var mysql = require('mysql')
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pakistan',
    datahost: 'dbzf3'
})
conn.connect((err) => {
    if (err) throw err;
    var sql = "SELECT = form users";
    conn.query(sql, (err, data, fields) => {
        if (err) throw err;
        console.log(data);
    });
})
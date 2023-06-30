var mysql = require('mysql');
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function insertRow(year, patiens) {
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        port: "3309",
        password: "passowrd for Linux 1234 |",
        database: "heat"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO tbl_DatosDengue (fecha, num_pacientes) VALUES (?)";
        var values = [year.toString(), patiens.toString()];
        con.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
        });
      });
}




async function main() {
    while (true) {
       year = Math.floor(Math.random() * 2023) + 1880;
       num_patiens = Math.floor(Math.random() * 20000) + 10000;
       insertRow(year,num_patiens);
       await sleep(1000);
    }
}

main();
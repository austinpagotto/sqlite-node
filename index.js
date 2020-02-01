const sqlite3 = require("sqlite3").verbose();


// let db = new sqlite3.Database("chinook.db", err => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log("connected to chinook");
// });

// let sql = "SELECT a.Title,b.Name FROM albums a INNER JOIN artists b on a.ArtistId=b.ArtistId WHERE a.Title ='" +title+"'";
// db.all(sql,[],(err,rows)=>{
//     if(err){
//         throw err;
//     }
//     const data = rows
//     console.log(JSON.stringify(data[0]['Title']))
// })


// let sql = `SELECT PlaylistId as id, Name as name FROM playlists WHERE PlaylistId = ?`;
// let PlaylistId = 1;

// db.get(sql, [PlaylistId], (err, row) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   return row
//     ? console.log(row.id, row.name)
//     : console.log("none found ya bucktee");
// });

// let sql = `SELECT FirstName, LastName, Email FROM Customers WHERE Country = ? ORDER BY FirstName`;
// db.each(sql,['USA'],(err,row)=>{
//     if (err) {
//         throw err
//     }
//     console.log(row.FirstName,row.LastName)
// })

// let db = new sqlite3.Database('sample.db');
// db.run('CREATE TABLE langs(name text)').then




db.close();

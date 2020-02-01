const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("chinook.db", err => {
  if (err) {
    console.log(err.message);
  }
  console.log("connected to chinook");
});

// const query = () => {
//   let sql = `SELECT PlaylistId as id, Name as name FROM playlists WHERE PlaylistId = ?`;
//   let PlaylistId = 1;

//   db.get(sql, [PlaylistId], (err, row) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     return row
//       ? console.log(row.id, row.name)
//       : console.log("none found ya bucktee");
//   });
// };


exports.db = db;
// exports.query = query;

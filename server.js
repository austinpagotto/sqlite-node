const express = require("express");
const app = express();
const db1 = require("./database");
const exphbs = require("express-handlebars");

const hbs = exphbs.create({
  defaultLayout: "main",
  helpers:{
    calculation:function(value){
      return value +7
    }
  }
});

const port = 8000;

app.engine("handlebars",hbs.engine);

app.set("view engine", "handlebars");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => res.render("index"));

app.get("/data", (req, res) => {
  getdata(parseInt(req.query.id)).then(data =>
    res.render("data", {
      data:encodeURIComponent(JSON.stringify(data)),
      htmlData:data
    })
  );
});

app.listen(port, () => {
  console.log("server running on " + port);
});


function getdata(id) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT PlaylistId as id, Name as name FROM playlists WHERE PlaylistId < ?`;
    let PlaylistId = id;

    db1.db.all(sql, [PlaylistId], (err, row) => {
      // const data = JSON.stringify(row);
      const data =row;
      if (data) {
        resolve(data);
      }
    });
  });
}

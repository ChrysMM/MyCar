const express = require("express");

// importation et modules : expresscors
const cors = require("cors");
const app = express();
 
const db = require("../app/models");
const Role = db.role;
//db.sequelize.sync({force: true}).then(() => {
  //console.log('Drop and Resync Db');
  //initial();
//});
// **************************************************************************************************************************
//configurer le serveur web express
//************************************************************************************************************************ */
 
//app.use(...);
 
db.sequelize.sync();
 
 
var corsOptions = {
  origin: "*",
  methods:"*"
  
};



app.use(cors(corsOptions));
 //parse requests of content-type - application/json
app.use(express.json());
 //parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Car App" });
});
require("./routes/voiture.routes.js")(app);


// // Route to Login Page Logiciel
// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/logiciel/js/login.html');
// });
 
// app.post('/login', (req, res) => {
//   // Login
//   let username = req.body.username;
//   let password = req.body.password;
//   res.send(`Username: ${username} Password: ${password}`);
// });


 // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//require("./routes/voiture.routes.js")(app);
require('../app/routes/auth.routes')(app);
require('../app/routes/user.routes')(app);
require('../app/routes/marque.routes')(app);
require('../app/routes/modele.routes')(app);
require('../app/routes/categorie.routes')(app);
require('../app/routes/statut.routes')(app);
require('../app/routes/reservation.routes')(app)


/*Connexion*/
function initial() {
 Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}



const { json } = require("express/lib/response");
const { YEAR } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");

//Constructeur
const Voiture = function(voiture){
     
    this.immatriculation = voiture.immatriculation;
    this.nbrePlace = voiture.nbrePlace;
    this.boite = voiture.boite;
    this.annee = voiture.annee;
    this.carburant = voiture.carburant;
    this.marque_id = voiture.marque_id;
    this.modele_id = voiture.modele_id;
    this.statut_id  = voiture.statut_id;
    this.categorie_id = voiture.categorie_id
}




//creation voiture
Voiture.create = (newVoiture, result) => {

    sql.query("INSERT INTO voiture SET ?", newVoiture, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created voiture: ", { id: res.insertId, ...newVoiture });
      result(null, { id: res.insertId, ...newVoiture });
    });
  };




  //Get toutes les voitures
  Voiture.getAll = (immatriculation, result) => {
    let query = "SELECT * FROM voiture";
    if (immatriculation) {
      query += ` WHERE immatriculation LIKE '%${immatriculation}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("voiture: ", res);
      result(null, res);
    });
  };



  // recherche par id
  Voiture.findById = (id, result) => {
    sql.query(`SELECT * FROM voiture WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found voiture: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Voiture with the id
      result({ kind: "not_found" }, null);
    });
  };



//Update par id
Voiture.updateById = (id, voiture, result) => {
  sql.query(
    "UPDATE voiture SET ? WHERE id = ?", [voiture, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Voiture with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated voiture: ", { id: id, ...voiture });
      result(null, { id: id, ...voiture });
    }
  );
};


// delete par id
Voiture.remove = (id, result) => {
  sql.query("DELETE FROM voiture WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Voiture with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted voiture with id: ", id);
    result(null, res);
  });
};

module.exports = Voiture;
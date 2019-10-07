import { Injectable } from '@angular/core';

const MongoClient = require("mongodb").MongoClient;
const URI = "mongodb+srv://admin:admin@lighthouse-3rte9.mongodb.net/test?retryWrites=true&w=majority";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getJSON(page): JSON {
    // MongoClient.connect(URI, function(err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("lighthouse_test");
    //   dbo.collection("09032019").findOne({ _id: page}, function(err, result) {
    //     if (err) throw err;
    //     db.close();
    //     return result;
    //   });
    // });
    return null;
  }
}

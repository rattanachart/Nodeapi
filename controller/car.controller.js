var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('toey.db');


exports.create = async (req, res, next) => {
  console.log('CREATE');

  db.serialize(function () {
    db.run("CREATE TABLE if not exists cars(cars_id INTEGER PRIMARY KEY,model TEXT, driver_id INTEGER,FOREIGN KEY (driver_id) REFERENCES driver (driver_id)");
    db.run("CREATE TABLE if not exists driver(driver_id INTEGER PRIMARY KEY,name TEXT");
    db.run("INSERT INTO cars (model, driver_id) VALUES ('Corvette Z06', 1),('Lotus Exige S', 1),('BMW M3', 1)")
    db.run("INSERT INTO cars (model, driver_id) VALUES ('BMW 320d', 2),('Mercedes SLK AMG', 2)")
    db.run("INSERT INTO cars (model, driver_id) VALUES ('Toyota Alphard', 3),('Mercedes Sprinter', 3)")
    db.run("INSERT INTO cars (model, driver_id) VALUES ('Toyota Camry', 4),('BMW M5', 4),('Porsche 911', 4),('Jaguar', 4),('TukTuk', 4),('Mini Cooper', 4),('Honda Jazz', 4)")
    db.run("INSERT INTO driver (name) VALUES('Rick'),('John'),('Zing'),('Nan')")
  });
  res.send("Success")
};

exports.list = async (req, res, next) => {
  db.get("SELECT name,model FROM cars INNER JOIN driver ON driver.driver_id = cars.driver_id;", function (err, row) {
    console.log(row);

    res.json(row);
  });
}
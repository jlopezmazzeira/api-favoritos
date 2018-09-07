//npm install express --save //para crear el servidor express
//npm install body-parser --save //para transformar los parámetros que vienen por http
//npm install -D nodemon //Para no estar ejecutando el comando node cada vez que hacemos un cambio
//npm install mongoose --save //Para trabajar con MongoDB
//npm install --save rxjs-compat //Para poder trabajar el Observable
//cuando creemos rutas los parámetros pueden ser obligatorio si lo hacemos de la siguiente forma
app.get('/prueba/:nombre', function(req, res) {
  var nombre = req.params.nombre;

  res.status(200)
  .send(
    {message: 'Hola mundo de NodeJS y Express - '+nombre}
  );
});

//Cuando los parámetros no son obligatorio se puede hacer de la siguiente forma
app.get('/opcional/:nombre?', function(req, res) {

  if (req.params.nombre) {
    var nombre = req.params.nombre;
  } else {
    var nombre = 'Sin nombre';
  }

  res.status(200)
  .send(
    {message: 'Hola mundo de NodeJS y Express - '+nombre}
  );
});

//MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo nano /etc/systemd/system/mongodb.service

Copiar y pegar

[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target

Guardar y salir del editor nano

sudo systemctl start mongodb
sudo systemctl status mongodb
sudo systemctl enable mongodb

//Comando MongoDB
show dbs
use nameDatabase
db.nameColecction.save({}) //Se mandan objetos json
db.dropDatabase()
show collections
db.customers.drop()

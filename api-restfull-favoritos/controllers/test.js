'use strict'

function test(req, res) {
  res.status(200)
    .send(
      {message: 'Hola mundo de NodeJS y Express'}
    );
};

function prueba(req, res) {
  var nombre = req.params.nombre;

  res.status(200)
  .send(
    {message: 'Hola mundo de NodeJS y Express - '+nombre}
  );
};

function opcional(req, res) {

  if (req.params.nombre) {
    var nombre = req.params.nombre;
  } else {
    var nombre = 'Sin nombre';
  }

  res.status(200)
  .send(
    {message: 'Hola mundo de NodeJS y Express - '+nombre}
  );
};

module.exports = {
  test,
  prueba,
  opcional
};

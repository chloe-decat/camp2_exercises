const express = require("express");
const app = express();
const PG = require('pg')
const port = process.env.PORT || 3000;

function route(parameter){
  app.get(
   `/${parameter}`,
   function(request, result) {
     const client = new PG.Client();
     client.connect();
     client.query(
       `SELECT * FROM ${parameter};`,
       function(error, resultQuery) {
         if (error) {
           result.send(error);
         } else {
           result.json(resultQuery.rows);
         }
         client.end();
       }
     );
   }
 );
}

route("categories");
route("brands");
route("products");


function routeId(parameter){
  app.get(
   `/${parameter}/:id`,
   function(request, result) {
    // request database
    const client = new PG.Client();
    client.connect();
    client.query(
      `SELECT * FROM ${parameter} WHERE id = $1;`,
      [request.params.id],
      function(error, resultQuery) {
        if (error) {
          result.send(error);
        } else {
          result.json(resultQuery.rows);
        }
        client.end();
      }
    );
   }
  );
}

routeId("categories");
routeId("brands");
routeId("products");

  app.get(
   "/categories/:id/products",
   function(request, result) {
    const client = new PG.Client();
    client.connect();
    client.query(
      `SELECT products.* FROM products INNER JOIN categories_products ON (products.id = categories_products.products_id) WHERE categories_products.categories_id = $1;`,
      [request.params.id],
      function(error, resultQuery) {
        if (error) {
          result.send(error);
        } else {
          result.json(resultQuery.rows);
        }
        client.end();
      }
    );
   }
  );

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

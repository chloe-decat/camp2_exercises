const request = require("request");
const { Pool } = require('pg')
const pool = new Pool()

function apicall(parameter,callback){
request(
  {
    url: `https://decath-product-api.herokuapp.com/${parameter}`,
    method: "GET",
  },
  function(error, response, result) {
    if (error) {
      console.warn("error:", error);
    }
    else {
      callback(result);
    }
    });
    }

function renderBrands(result){
  const parsResult =JSON.parse(result);

  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }

    parsResult.map(function(newResult) {
      return client.query(
        "INSERT INTO brands VALUES ($1,$2);",
        [newResult.id, newResult.title],
        (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          console.log(result.rows)
        }
      )
    })
  })
};

function renderProducts(result){
  const parsResult =JSON.parse(result);

  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }

    parsResult.map(function(newResult) {
      return client.query(
        "INSERT INTO products VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);",
        [newResult.id, newResult.decathlon_id,newResult.title, newResult.description,newResult.brand_id, newResult.min_price,newResult.max_price, newResult.crossed_price,newResult.percent_reduction,newResult.image_path, newResult.rating],
        (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          console.log(result.rows)
        }
      )
    })
  })
};

function renderCategories(result){
  const parsResult =JSON.parse(result);

  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }

    parsResult.map(function(newResult) {
      return client.query(
        "INSERT INTO categories VALUES ($1,$2,$3);",
        [newResult.id, newResult.decathlon_id,newResult.label],
        (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          console.log(result.rows)
        }
      )
    })
  })
};
apicall("brands",renderBrands);
apicall("products",renderProducts);
apicall("categories",renderCategories);

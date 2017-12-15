const request = require('request');
const { Pool } = require('pg');
const pool = new Pool();

function renderproductsbycategories(ProductsByCategoriesJSON,identifier){
  const parsedResult = JSON.parse(ProductsByCategoriesJSON);
  pool.connect(
    (error, client, release) =>{
      if (error){
        release();
        return console.error('Error acquiring client', error.stack);
      }
      else
      {
        parsedResult.map((newResult) => {
          return client.query(
            'INSERT INTO categories_products (categories_id,products_id) VALUES ($1,$2);',
            [identifier,newResult.id],
            (error, ProductsByCategoriesJSON)=>{
              if (error){
                return console.error('Error acquiring client', error.stack);
              }
              return console.log(ProductsByCategoriesJSON);
            }
          );
        }
        );
        release();
      }
    }
  );
}

function apicallproductsbycategories(identifier,renderproductsbycategoriescallback){
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${identifier}/products`,
      method: 'GET',
    },
    function(error, response, ProductsByCategoriesJSON) {
      if (error) {
        console.warn('error:', error);
      }
      else {
        renderproductsbycategoriescallback(ProductsByCategoriesJSON,identifier);
      }
    }
  );
}

function renderIdentifier(resultJSON, apicallproductsbycategoriescallback){
  setTimeout (() => {
  for (let i=1; i<400;i++){
    const identifier = JSON.parse(resultJSON)[i].id;
    apicallproductsbycategoriescallback(identifier, renderproductsbycategories);
  }} , 100000);
  setTimeout (() => {
  for (let j=400; j<800;j++){
    const identifier = JSON.parse(resultJSON)[j].id;
    apicallproductsbycategoriescallback(identifier, renderproductsbycategories);
  }} , 100000);
  for (let k=800; k<1002;k++){
    const identifier = JSON.parse(resultJSON)[k].id;
    apicallproductsbycategoriescallback(identifier, renderproductsbycategories);
}
}

function apicallparameter (parameter, renderIdentifierCallback) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/${parameter}`,
      method: 'GET'
    },
    function(error, response, resultJSON) {
      if (error){
        console.warn('error:', error);
      }
      else {
        renderIdentifierCallback(resultJSON, apicallproductsbycategories);
      }
    }
  );
}

apicallparameter('categories', renderIdentifier);



function renderBrands(result){
  const parsedResult = JSON.parse(result);
  pool.connect(
    (error, client, release) =>{
      if (error){
        release();
        return console.error('Error acquiring client', error.stack);
      }
      else
      {
        parsedResult.map((newResult) => {
          return client.query(
          'INSERT INTO brands VALUES ($1, $2);',
            [newResult.id,newResult.title],
            (error, result)=>{
              if (error){
                return console.error('Error acquiring client', error.stack);
              }
              return console.log(result);
            }
          );
        }
        );
        release();
      }
    }
  );
}
function renderProducts(result){
  const parsedResult = JSON.parse(result);
  pool.connect(
    (error, client, release) =>{
      if (error){
        release();
        return console.error('Error acquiring client', error.stack);
      }
      else
      {
        parsedResult.map((newResult) => {
          return client.query(
            'INSERT INTO Products VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11);',
            [newResult.id,newResult.decathlon_id,newResult.title,newResult.description,newResult.brand_id,newResult.min_price,newResult.max_price,newResult.crossed_price,newResult.percent_reduction,newResult.image_path,newResult.rating],
            (error, result)=>{
              if (error){
                return console.error('Error acquiring client', error.stack);
              }
              return console.log(result);
            }
          );
        }
        );
        release();
      }
    }
  );
}
function renderCategories(result){
  const parsedResult = JSON.parse(result);
  pool.connect(
    (error, client, release) =>{
      if (error){
        release();
        return console.error('Error acquiring client', error.stack);
      }
      else
      {
        parsedResult.map((newResult) => {
          return client.query(
            'INSERT INTO categories VALUES ($1, $2, $3);',
            [newResult.id,newResult.decathlon_id,newResult.label],
            (error, result)=>{
              if (error){
                return console.error('Error acquiring client', error.stack);
              }
              return console.log(result);
            }
          );
        }
        );
        release();
      }
    }
  );
}
// apicallparameter(“brands”,renderBrands);
// apicallparameter(“products”,renderProducts);
// apicallparameter(“categories”,renderCategories);

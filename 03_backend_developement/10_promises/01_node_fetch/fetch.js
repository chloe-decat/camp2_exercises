const fetch = require("node-fetch");

function getTitleOfBrandForAProductWithItsId(id) {
  fetch(`https://decath-product-api.herokuapp.com/products/${id}`)
    .then(response => response.json())
    .then(product => product.brand_id)
    .then(brand_id => fetch(`https://decath-product-api.herokuapp.com/brands/${brand_id}`))
    .then(response => response.json())
    .then(brand => console.log(brand.title))
    .catch((error) => {
      console.warn(error);
    });
}

getTitleOfBrandForAProductWithItsId("efe288cb-fb63-4b23-b8df-529f04b8b02b");


// 2. On the same chain of promises, get the title of the brand of this product

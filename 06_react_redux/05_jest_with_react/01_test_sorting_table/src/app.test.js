import React from 'react';
import App from './app.js';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
const Wapiti = require("wapiti");



const testproducts =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]


configure({ adapter: new Adapter() });

//ceci est la methode shallow :
describe('<App />', () => {
  test('should sort decathlon_id App', () => {
    const wrapper = shallow(<App lines={testproducts}/>);
    expect(wrapper.find('td').first().text()).toEqual('8044622');
  });

// ceci est la methode TEST
test('Everything is Equal', () => {
  const component = renderer.create(
    <App lines={testproducts}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Sort title onClick
test('Sort title onClick', () => {
  const component = renderer.create(
    <App lines={testproducts}/>
  );
  let tree = component.toJSON();
  tree.props.onClick=() => this.filter("title");
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("it should get the content of elements of the page", () => {
  return Wapiti.goto("http://localhost:3000/index.html")
    .capture(() => document.querySelector("thead").textContent)
    .run()
    .then(result => {
      expect(result).toEqual("IDTitlePrice");
    });

});




});

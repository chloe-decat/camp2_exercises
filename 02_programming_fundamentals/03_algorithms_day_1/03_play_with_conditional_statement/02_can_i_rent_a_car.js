// Do not pay attention to this line for the moment
const driverData = require('./.driver_data');

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenceIssued = driverData.licenceIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar;

// Your code here:
const conductorA = {
  name: 'Chloe',
  license: driverLicense,
  licenseYear: licenceIssued,
  accidentsCount: numberOfAccident,
  bonus: bonus
};

if (
  (conductorA.license ==='B'||conductorA.license==='B1')
  && conductorA.licenseYear <= 2015
  && (conductorA.accidentsCount=== 0||conductorA.bonus> 0.7)
) {
  canRentACar = true;
}else {
  canRentACar = false;
}

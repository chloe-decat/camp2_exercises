const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

function canRentACar(driver) {
  if ((driver.driverLicense === "B1"|| driver.driverLicense ==="B")
    && (driver.licenseIssued<=new Date().getFullYear() - 2)
    && (driver.numberOfAccident===0||driver.bonus>0.7)) {
    return true;
  } else {
    return false;
  }
}// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car




// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar

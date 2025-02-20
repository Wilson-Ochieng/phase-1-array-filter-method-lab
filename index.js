// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const findMatching = (drivers, driverName) =>
  drivers.filter((driver) => driver.toLowerCase() === driverName.toLowerCase());


const fuzzyMatch = (drivers, driverName) => {
    return drivers.filter((driver) => driver.startsWith(driverName));
}

const matchName = (drivers, driverName) => {
    return drivers.filter((driver) => driver.name === driverName);
}





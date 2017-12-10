// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
  console.log(driver.name);
})
};

const logDriversByHometown = function (drivers, location) {
   drivers.forEach(function (driver) {
     if (driver.hometown === location)
     console.log(driver.name);
   })
};

const driversByRevenue = function (drivers) {
  const revenueSorter = drivers.slice().sort(function (rev1, rev2) {
  return rev1.revenue - rev2.revenue;
});
 return revenueSorter;
};

const driversByName = function (drivers) {
  const compare = function (a,b) {
    return (a.name).localeCompare(b.name);
  };
  const sortedByName = drivers.slice().sort(compare);
  return sortedByName;
};

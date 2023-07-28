const _ = require("lodash");

const objectFromApi1 = require("../src/checkObject1.json");
const objectTwo = require("../src/objecttwo.json");
const objectThree = require("../src/objectThree.json");

const isEqual1And2 = _.isEqual(objectFromApi1, objectTwo);
const isEqual2And3 = _.isEqual(objectTwo, objectThree);
const isEqual1And3 = _.isEqual(objectFromApi1, objectThree);

console.log("Is objectFromApi1 equal to objectTwo?", isEqual1And2);
console.log("Is objectTwo equal to objectThree?", isEqual2And3);
console.log("Is objectFromApi1 equal to objectThree?", isEqual1And3);

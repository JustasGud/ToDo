exports.getDate = function () {
  // this line exports the data from the file so it would be availabe to use in other files.

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-UK", options);
};
exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-UK", options);
};

console.log(module.exports);

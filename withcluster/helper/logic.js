function logic(num = 10) {
  var val = 100;
  console.log("Big logic running.", num);
  for (let i = 1; i <= val * num; i++) {
    for (let j = 1; j <= val * num; j++) {}
  }
  console.log("Big logic end.", val * num);
  return val * num;
}

module.exports = logic;

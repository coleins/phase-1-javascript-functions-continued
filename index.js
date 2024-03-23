function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());

function mondayWork(whatsUp = "go to the office") {
  return `This Monday, I will ${whatsUp}.`;
}
console.log(mondayWork());

function wrapAdjective(symbol = "*") {
  return function (adjective) {
    return `You are ${symbol}${adjective}${symbol}!`;
  };
}

// Your code here
let mapToNegativize = function (sourceArray){
  const map1 = sourceArray.map(x => x*-1)
  return map1
}

let mapToNoChange = function (sourceArray){
  const map1 = sourceArray.map(x => x)
  return map1
}

let mapToDouble = function (sourceArray){
  const map1 = sourceArray.map(x => x*2)
  return map1
}

let mapToSquare = function (sourceArray){
  const map1 = sourceArray.map(x => x*x)
  return map1
}

let reduceToTotal = function (sourceArray, initialValue = 0){
  const reduce1 = sourceArray.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  return reduce1
}

let reduceToAllTrue = function (sourceArray){
  const reduce1 = sourceArray.reduce((previousValue, currentValue) => !!previousValue && !!currentValue)
  return reduce1
}

let reduceToAnyTrue = function (sourceArray){
  const reduce1 = sourceArray.reduce((previousValue, currentValue) => !!previousValue || !!currentValue)
  return reduce1
}

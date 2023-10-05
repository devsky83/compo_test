function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject('Error: Input is not an array');
    } else {
      let lowerCaseArr = arr.filter(word => typeof word === 'string').map(word => word.toLowerCase());
      resolve(lowerCaseArr);
    }
  });
}

lowerCaseWords( ['PIZZA', true, 10, false, 'Wings'] ).then(
  res => console.log(res)
);
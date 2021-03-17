
function getRandomValue(min, max) {
  var localMin = min;
  var localMax = max - min + 1;
  return Math.floor(Math.random() * localMax) + localMin;
}

function getRandomArray() {
  var randomValues = [];
  while (randomValues.length < 5) {
    var rnd = getRandomValue(1, 100);
    randomValues.push(rnd);
  }
  console.log(randomValues);
  return alert('Simon says: ' + randomValues);
}
getRandomArray();

function reqNum() {
  for (var i = 0; i < 5; i++) {
    var numInsert = parseInt(prompt('Scrivi i numeri che hai visto'));
  }
}

function init() {

  setTimeout(reqNum, 5000);

}

init();


// var block = 0;

// function reqNum() {
//   var numInsert = parseInt(prompt('Scrivi i numeri che hai visto'));
//
//   if (numInser > 5) {
//     clearInterval(block);
//     console.log('fine inserimento numeri');
//   }
// }
//
// function init() {
//
//   block = setInterval(reqNum, 5000);
//
// }
//
// init();

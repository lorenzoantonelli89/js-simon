
function getRandomValue(min, max) {
  var localMin = min;
  var localMax = max - min + 1;
  return Math.floor(Math.random() * localMax) + localMin;
}

var randomValues = [];

function getRandomArray() {
  while (randomValues.length < 5) {
    var rnd = getRandomValue(1, 100);
    randomValues.push(rnd);
  }
  console.log(randomValues);
  return alert('Simon says: ' + randomValues);
}
getRandomArray();

var numInsertValues = [];
var numInsertCorrect = [];
var block = 0;

function reqNum() {
  var numInsert = parseInt(prompt('Scrivi i numeri che hai visto'));
  numInsertValues.push(numInsert);
  if (randomValues.includes(numInsert)) {
    numInsertCorrect.push(numInsert);
  }

  if (numInsertValues.length > 4) {
    clearInterval(block);
  }

  if (numInsertCorrect.length == 5) {
    console.log('Hai vinto');
  }else if (numInsertValues.length == 5 ) {
    console.log('Hai perso totalizzando ' + numInsertCorrect.length + ' punti, i numeri indovinati sono : ' + numInsertCorrect);
  }

}


function init() {

  block = setInterval(reqNum, 30000);

}

init();

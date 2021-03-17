
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

var block = 0;

function reqNum() {
  var numInsert = parseInt(prompt('Scrivi i numeri che hai visto'));
  numInsertValues.push(numInsert);

  if (numInsertValues.length > 4) {
    clearInterval(block);
    console.log('fine inserimento numeri');
  }

  if (randomValues.includes(numInsert)) {
    console.log('Hai vinto');
  }else {
    console.log('Hai perso totalizzando ' + numInsertValues.length + ' punti, i numeri indovinati sono : ' + numInsertValues);
  }
}


function init() {

  block = setInterval(reqNum, 1000);

}

init();

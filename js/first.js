
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

function reqNum() {
  for (var i = 0; i < 5; i++) {
    var numInsert = parseInt(prompt('Scrivi i numeri che hai visto'));
    if (randomValues.includes(numInsert)) {
      numInsertValues.push(numInsert);
    }
  }

  if (randomValues.includes(numInsert)) {
    console.log('Hai vinto');
  }else {
    console.log('Hai perso totalizzando ' + numInsertValues.length + ' punti, i numeri indovinati sono : ' + numInsertValues);
  }
}


function init() {

  setTimeout(reqNum, 30000);

}

init();

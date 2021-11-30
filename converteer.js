document.getElementById('button').addEventListener('click', function(e){

  e.preventDefault();

  let kgs = parseInt(document.getElementById('weightInput').value);

  document.getElementById('poundsOutput').innerHTML = kgs * 2.2047058824;
  document.getElementById('ouncesOutput').innerHTML = kgs * 35,2739215686;
  document.getElementById('gramsOutput').innerHTML = kgs * 1000;
});

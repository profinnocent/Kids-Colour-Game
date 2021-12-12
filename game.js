/* */
const div31 = document.querySelector('.row31')
const div41 = document.querySelector('.row41')
const div51 = document.querySelector('.row51')
const div61 = document.querySelector('.row61')
const div71 = document.querySelector('.row71')
const div81 = document.querySelector('.row81')
const div91 = document.querySelector('.row91')
const div101 = document.querySelector('.row101')
const div32 = document.querySelector('.row32')
const div42 = document.querySelector('.row42')
const div52 = document.querySelector('.row52')
const div62 = document.querySelector('.row62')
const div72 = document.querySelector('.row72')
const div82 = document.querySelector('.row82')
const div92 = document.querySelector('.row92')
const div102 = document.querySelector('.row102')
const btnStart = document.querySelector('.btnstart')
const btnExit = document.querySelector('.btnexit')
const btnReset = document.querySelector('.btnreset')
const img31 = document.querySelector('#img31')

let q = 31;

btnStart.addEventListener('click', startGame);

/*
btnReset.addEventListener('click', resetGame);

btnExit.addEventListener('click', exitGame);

*/

//divs array
const divArr = [
  div31,
  div41,
  div51,
  div61,
  div71,
  div81,
  div91,
  div101,
  ]

//Array used to shuffle fruits
const arr1 = [
'images/pear.png',
'images/blueberry.png',
'images/cherry.png',
'images/strawberry.png',
'images/almond.png',
'images/tangerine.png',
'images/orange.png',
'images/Raspberry.png'];






function startGame(){
  shuffleArr(arr1);
  for(let i=0;i<arr1.length;i++){
    let divImg = document.createElement('IMG');
  divImg.style.visibility = 'visible'; 
    divImg.src = arr1[i];

    divArr[i].appendChild(divImg);
    }
}


//function to shuffle array
shuffleArr = (arr) => {
    arr.sort( () => 0.5 - Math.random());
};

/*

shuffleArr(arr1);

console.log(arr1)

shuffleArr(arr1);

console.log(arr1)

*/


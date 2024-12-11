var date = new Date();
var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
var current_date = date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear()+" at "+date.getHours()+":"+date.getMinutes();
document.getElementById("day").innerHTML = current_date;
//------------------------
min = 1 
max= 6
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt1 = randomIntFromInterval(1, 6);
const rndInt2 = randomIntFromInterval(1, 6);
console.log(rndInt1,rndInt2);
//------------------------
// var button = document.getElementById('changeImageButton');
// button.addEventListener('click', function() {
//   changeImageSrc('new-image.jpg');
// });


 document.getElementById('btn').addEventListener('click', function () {
    console.log("first_box : red");

    // const secondBox = document.getElementById('second');
    // secondBox.style.background = 'green';

    
    newSrc ='dice-'+rndInt1+'.svg'
    var image = document.getElementById('dics1');
    image.src = newSrc;

    newSrc ='dice-'+rndInt2+'.svg'
    var image = document.getElementById('dics2');
    image.src = newSrc;


    let total = rndInt1 + rndInt2;

    num_total = document.getElementById('total');
    num_total.textContent = total;

    if (total < 8) {
        // num_total = document.getElementById('result');
        document.getElementById("result").innerHTML = "You didn't win: Try Again!";
    } else{
        document.getElementById("result").innerHTML = "You Win: Try Again!";
    }
    
});




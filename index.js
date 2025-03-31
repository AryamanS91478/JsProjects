const counterLabel = document.getElementById("counterLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn= document.getElementById("increaseBtn");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    counterLabel.textContent= count;
}
decreaseBtn.onclick = function(){
    count--;
    counterLabel.textContent= count;
}
resetBtn.onclick = function(){
    count=0;
    counterLabel.textContent= count;
}
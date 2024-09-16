const decb = document.getElementById("dec");
const incb = document.getElementById("inc");
const resb = document.getElementById("res");
const countlabel =  document.getElementById("counter");
let count = 0;

incb.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decb.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resb.onclick = function(){
    count = 0;
    countlabel.textContent = 0;

}
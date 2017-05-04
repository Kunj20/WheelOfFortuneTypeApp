var d1= document.getElementById("d1");
var d2= document.getElementById("d2");
var d3= document.getElementById("d3");
var d4= document.getElementById("d4");
var d5= document.getElementById("d5");
var d6= document.getElementById("d6");
var d7= document.getElementById("d7");
var d= document.getElementsByClassName("a");
var nextButton= document.getElementById("b1");
var wordArray= ["jacuzzi", "jukebox", "fuzzily"];
var letterArray= [];
var k=0;
function setWord(word){
  letterArray= wordArray[k].split("");
  d1.innerHTML= letterArray[0];
  d2.innerHTML= letterArray[1];
  d3.innerHTML= letterArray[2];
  d4.innerHTML= letterArray[3];
  d5.innerHTML= letterArray[4];
  d6.innerHTML= letterArray[5];
  d7.innerHTML= letterArray[6];
  for(i=0; i<letterArray.length; i++){
  d[i].style.display= "none";
}
}
setWord(wordArray[k]);
window.addEventListener("keypress", function(event){
  event.preventDefault();
  for(i=0; i<letterArray.length; i++){
    if(event.key === letterArray[i]){
      alert("Correct letter");
      d[i].style.display= "block";
    }
  }
})
nextButton.addEventListener("click", function(){
  k++;
  if(k<wordArray.length){
    setWord(wordArray[k]);
  }
  else {
    k=0;
    setWord(wordArray[k]);
  }
})

var text = document.getElementById('text');
var splitText = text.innerText.split('');

text.innerHTML = '';
i = 0
setInterval(function(){
  AjoutDeLettre()}
  , 45 )

function AjoutDeLettre(){
if(i < splitText.length){
  text.innerHTML += splitText[i];
  i++;
}
}
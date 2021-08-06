const buttonAdd = document.getElementById('btn')
const close = document.getElementsByClassName('close');

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

buttonAdd.addEventListener('click', addActivity)

document.addEventListener('keypress', function(e){ //pegando a tecla enter
    if(e.which == 13){
        addActivity()
    }
}, false)

close.addEventListener('click', deleteItem)

function addActivity() {
    //console.log('Entrou')
    var li = document.createElement('li')
    const input = document.getElementById('myInput').value
    var t = document.createTextNode(input);
    li.appendChild(t);
    //console.log(li)

    if(input == ''){
        alert("Entrada não pode ser vazia");
    }
    else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById("myInput").value = '';
    document.getElementById("myInput").focus()

    var span = document.createElement("SPAN");
    var icon = document.createElement('IMG');
    icon.src = 'icons/delete.png'
    span.className = "close";
    span.appendChild(icon);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}

function deleteItem(){
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}
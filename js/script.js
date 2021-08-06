const buttonAdd = document.getElementById('btn')

buttonAdd.addEventListener('click', addActivity)

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

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}


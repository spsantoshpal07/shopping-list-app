var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");
var flag = 0;
var liAll;

var inputLength = function(){
    return input.value.length
}

var addList = function(){
    var onClick = function(){
        li.classList.toggle("done");
    }

    var delItem = function(){
        div.remove();
        delButton.remove();
        if(totalItems1()===0){
            empty.style.display = "block";
        }
    }

    var li = document.createElement("li");
    var div = document.createElement("div");
    ul.appendChild(div);
    div.style.display = "flex";
    div.style.marginTop = "10px";
    div.appendChild(li);
    li.appendChild(document.createTextNode(input.value))
    //ul.appendChild(li)
    //li.classList.add("listItem");
    li.style.userSelect = 'none';
    li.style.fontSize = "3rem";
    li.addEventListener("click", onClick);
    input.value = '';

    if(totalItems1()>0){
        var empty = document.getElementsByClassName("empty")[0];
        empty.style.display = 'none';
    }

    var delButton = document.createElement("button");
    div.appendChild(delButton);
    delButton.appendChild(document.createTextNode("Delete Item!"));

    //Setting style(Both methods are valid)
    delButton.style.marginLeft = "50px";
    //delButton.setAttribute("style","margin-left:50px");

    delButton.addEventListener('click', delItem);
}

var listOfItemsAlreadyInList = function(){
    liAll = document.querySelectorAll("li");
    flag = 0;
}

var totalItems1 = function(){
    var totalItems = document.querySelectorAll("li").length;
    return totalItems;
}

var allItemsInList = function(){
    liAll.forEach(function(i){
        if(i.innerHTML.toLowerCase() === input.value.toLowerCase()){
            alert("Item already in the list!!");
            input.value = '';
            flag = 1;
            return true;
        }
    })
}

var onButtonClick = function(){
    listOfItemsAlreadyInList();
    if(inputLength() > 0){
        allItemsInList();
        if(flag === 0){
            addList();
        }
    }
}

var onKeyPress = function(event){
    listOfItemsAlreadyInList();
    if(inputLength() > 0 && event.keyCode===13){
        allItemsInList();
        if(flag === 0){
            addList();
        }
    }
}

button.addEventListener("click", onButtonClick)

input.addEventListener("keypress", onKeyPress)
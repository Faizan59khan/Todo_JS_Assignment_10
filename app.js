
var list=document.getElementById("list")

function addToDo(){
var todoInput=document.getElementById("todo-item")


var li=document.createElement("li")  
var liText=document.createTextNode(todoInput.value) //it stores the text which the user gives input field
li.setAttribute("class","liwidth")
li.appendChild(liText)    // Now adding in our value
list.appendChild(li)

//Delete Button
var delBtn=document.createElement("button") // creating button through JS
var delText=document.createTextNode("Delete")
delBtn.setAttribute("class","btn")  //We can give multiple atributes and also styling through js
delBtn.setAttribute("onclick","deleteItem(this)") //this poora element pass krdega (yaha button pass krdega)
delBtn.appendChild(delText)




var editBtn=document.createElement("button") // creating button through JS
var editText=document.createTextNode("Edit")
editBtn.setAttribute("class","btn")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")





li.appendChild(delBtn)
li.appendChild(editBtn)





todoInput.value=""

}

function deleteItem(e){
e.parentNode.remove() // remove is a method which removes the element

}

function deleteAll(){
    list.innerHTML="" 
}

function editItem(e){  // we have to update the value
    var val=e.parentNode.firstChild.nodeValue;// pN gives li and fC (value hai uske) gives the name cha nV changes its value
    var editValue=prompt("Enter Edit Value",val); //val is def value (shows name which is already store)
 
    e.parentNode.firstChild.nodeValue=editValue; 
 
   
}

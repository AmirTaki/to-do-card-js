let list =  document.querySelector("#to-do-list")
let addInput = document.querySelector('#add-form input')
let searchInput = document.querySelector("#serach-form input")
let addBtn = document.querySelector("#add-form button")

list.addEventListener("click", (event)=>{
    console.log(event.target.className )          // => return delete-btn
    // console.log(event.currentTarget) // => return to-do-list
    if(event.target.nodeName ==  "SPAN" && event.target.className == "delete-btn"){
        event.target.parentNode.remove()
        if (list.children.length == 0){
            let listEmptyMsg = document.createElement('div')
            listEmptyMsg.style.textAlign = 'center'
            listEmptyMsg.style.color = "#333"
            listEmptyMsg.innerText = "your list is empty"
            listEmptyMsg.id = "emptyMsg"
            list.appendChild(listEmptyMsg)
        }
    } 

})





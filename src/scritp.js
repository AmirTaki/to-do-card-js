let list =  document.querySelector("#to-do-list")
let addInput = document.querySelector('#add-form input')
let searchInput = document.querySelector("#search-form input")
let addBtn = document.querySelector("#add-form button")



// delete item
list.addEventListener("click", (event)=>{
    // console.log(event.target.className )          // => return delete-btn
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
 /// create list item
const createListItem = (value) =>{
    let item = document.createElement("li")
    let title = document.createElement("span")
    let btn = document.createElement("span")

    item.className = "to-do-item"
    
    title.className = "title"
    title.innerText = value
    
    btn.className = "delete-btn"
    btn.innerText = "delete"

    item.appendChild(title)
    item.appendChild(btn)

    return item;

} 

// add mesage new to list
addBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(!addInput.value){
        return
    }
    if(document.querySelector("#emptyMsg")){
        document.querySelector("#emptyMsg").remove()
    }
    list.append(createListItem(addInput.value))
    addInput.value = ""
})


// search 

searchInput.addEventListener("input", (event)=>{
    Array.from(list.children).forEach((element)=>{
        if (document.querySelector("#emptyMsg")) return
        
        if (element.querySelector('.title').innerText.toLowerCase().includes(event.target.value.toLowerCase())){
            element.style.display = "flex"
        }
        else {
                  element.style.display = "none"
        }
    })
})


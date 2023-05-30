const item = document.querySelector('#item')
const toDoBox = document.querySelector('#to-do-list')

item.addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        addToDo(this.value)
        this.value = ""
    }
})

const addToDo = (item) =>{
   const listItem = document.createElement('li')
   listItem.innerHTML=`
   ${item} 
   <span class="material-symbols-outlined">
       disabled_by_default
   </span>
   `;

   listItem.addEventListener("click", function(){
    this.classList.toggle("done")
   })

   listItem.querySelector("span").addEventListener("click",
   function(){
    listItem.remove()
   })
   toDoBox.appendChild(listItem)
} 
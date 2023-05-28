 const addBtn = document.querySelector("#addBtn")
 const main = document.querySelector("#main")
 
 const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea")
    const data = []
    notes.forEach((note) =>{
        data.push(note.value)
    })
    if(data.length === 0){
        localStorage.removeItem('notes')
    }else{
        localStorage.setItem('notes', JSON.stringify(data))
    }
 }

 addBtn.addEventListener("click",()=>{ addNote()})
 
 
 const addNote = (text = "") => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <span class="save material-symbols-outlined">
    save
    </span>
    <span class="delete material-symbols-outlined">
    delete
    </span>    
    </div>
    <textarea>${text}</textarea>
    `;
    note.querySelector('.delete').addEventListener("click",
    function(){
        note.remove()
        saveNotes()
    })
    
    note.querySelector(".save").addEventListener("click",()=>{
        saveNotes()
    })
    note.querySelector('textarea').addEventListener('click', ()=>{
        saveNotes()
    })
    main.appendChild(note)
    saveNotes()
} 

(
   function(){
       const lsNotes = JSON.parse(localStorage.getItem('notes'))
       if(lsNotes === null){
            addNote()
       }else{
           lsNotes.forEach(
               (lsNotes) => {
                   addNote(lsNotes)
               }
           )
        }
   }
)()
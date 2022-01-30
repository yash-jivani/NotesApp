
const main = document.querySelector('.container')

const addBtn = document.querySelector('.Add-Note-btn');
// console.log(addBtn)

addBtn.addEventListener('click', addNewNote);

function addNewNote() {

    const createNote = document.createElement('div');
    createNote.innerHTML = `        
        <div class="NoteBox">
            <div class="Note">
                <textarea class="txtArea-edit" placeholder="Type here..."></textarea>
            </div>
            <div class="editing">
                <button class="delete-note-btn"><img src="delete_black_24dp.svg" alt=""></button>
            </div>
        </div>
    `
    main.appendChild(createNote);

    // NOTE : here we have to select from createNote | not from document
    const delNoteBtn = createNote.querySelector('.delete-note-btn');
    delNoteBtn.addEventListener('click', () => {
        createNote.remove();
    })
}



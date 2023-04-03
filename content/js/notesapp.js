/* Code for notes app */

const addBtn = document.getElementById('add-btn');
const notes = document.querySelector('.notes');

addBtn.addEventListener('click', () => addNote());

// Function that save Notes
const saveNotes = () => {
    const noteInputs = document.querySelectorAll('.notes-card textarea');
    const data = [];
    noteInputs.forEach(note => {
        data.push(note.value);
    });
    if (data.length === 0) {
        localStorage.removeItem('notes');
    } else {
        localStorage.setItem('notes', JSON.stringify(data));
    }
}

// Fuction to add a note
const addNote = (text = "") => {
    let note = document.createElement('div');
    note.classList.add('col');
    note.innerHTML = `
    <div class="col">
        <div class="card notes-card">
            <div class="tools w-100 bg-dark color-white p-3 d-flex justify-content-end">
                <i class="save fa-solid fa-floppy-disk fa-lg text-light p-2 cursor-pointer"></i>
                <i class="delete fa-solid fa-trash fa-lg text-light p-2 cursor-pointer"></i>
            </div>
            <div class="card-body">
                <textarea class="w-100 h-100 border-0 font-xs-18">${text}</textarea>
            </div>
        </div>
    </div>`;
    note.querySelector('.delete').addEventListener('click', () => {
        note.remove();
        saveNotes();
    });
    note.querySelector('.save').addEventListener('click', () => saveNotes());
    note.querySelector('textarea').addEventListener('focusout', () => saveNotes());
    notes.appendChild(note);
};

// Initial fuction on load to get item from localstorage
(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem('notes'));
        if (lsNotes === null) {
            addNote();
        } else {
            lsNotes.forEach(lsNote => addNote(lsNote));
        }
    }
)()
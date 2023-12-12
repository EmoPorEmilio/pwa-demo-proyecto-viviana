var notes = [];

document.addEventListener('DOMContentLoaded', (event) => {
  renderNotes();
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    var note = document.querySelector('textarea').value;
    if (note.length == 0) {
      alert('No tiene contenido');
    } else {
      notes.push(note);
      renderNotes();
      document.querySelector('textarea').value = '';
    }
  });
});

function renderNotes() {
  const ul = document.querySelector('#notes');
  ul.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.innerHTML = note;
    const deleteButton = document.createElement('a');
    deleteButton.innerHTML = ' X ';
    deleteButton.addEventListener('click', (event) => {
      if (confirm('Borrar esta nota?')) {
        notes.splice(index, 1);
        renderNotes();
      }
    });
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}

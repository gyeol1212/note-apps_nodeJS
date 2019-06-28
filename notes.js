const fs = require('fs');

const getNotes = function() {
  return 'Your notes ...';
};

const addNote = function(title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    console.log('New Note Added!');
  } else {
    console.log('Note title taken!');
  }

  saveNotes(notes);
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function(title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });
  saveNotes(notesToKeep);

  if (notesToKeep.length === notes.length) {
    console.log('Nothing remove!');
  } else {
    console.log('something remove!');
  }
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNotes();

  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(duplicateNote.title);
    console.log(duplicateNote.body);
  } else {
    console.log('Not Existing');
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
// import notes from './notes';
import CreateArea from './components/CreateArea';
import { useState } from 'react';


function App() {
  const [note, setNote]= useState([])
  function addNote(newNote){
    // console.log(note);
    setNote(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id){
    // console.log("delete");
    setNote(prevNotes => {
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header/>
      <CreateArea 
      onAdd = {addNote}/>
      {note.map((noteItem, index)=><Note 
        key = {index} 
        id = {index}
        title={noteItem.title}
        content = {noteItem.content}
        onDelete = {deleteNote}
      />
      )}
      <Footer/>
    </div>
  );
}

export default App;

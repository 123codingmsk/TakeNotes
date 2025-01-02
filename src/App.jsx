import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateArea from './components/CreateArea';
import Note from './components/Note';

function App() {

  const[notes, setNotes] = useState([]);

  function addNotes(note){
    setNotes((prevNotes)=>{
      return [
        ...prevNotes,
        note
      ]
    })
    console.log('note added on screen');
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes}/>
      {notes.map((noteItem, index)=>{
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

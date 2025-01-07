import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchQuery, setSearchQuery] = useState(""); //state for search

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNotes(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log("note added on screen");
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleSearch(event) { //handling search input
    setSearchQuery(event.target.value.toLowerCase());
  }

  //Filter notes based on the search
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery) ||
    note.content.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Header />
      <div className="create-note">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={handleSearch} //search input
          style={{
            width: "40%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            marginTop: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}          
        />
      </div>
      <CreateArea onAdd={addNotes} />
      {filteredNotes.map((noteItem, index) => {
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

import {useState} from 'react';
import './App.css';

function App() {

type Note = {
  id: number;
  title: string;
  content: String;
}


  const [notes,setNotes] = useState<
  Note[]
  >([
    {
      id: 1,
      title: "note title 1",
      content: "content 1"
    },
    {
      id: 2,
      title: "note title 2",
      content: "content 2"
    },{
      id: 3,
      title: "note title 3",
      content: "content 3"
    },
    {
      id: 4,
      title: "note title 4",
      content: "content 4"
    }
  ]);

const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const handleSubmit = (
  event: React.FormEvent
) => {event.preventDefault(); 
  console.log("title: ",title);
  console.log("Content: ",content);
};

  return (

    <div className="app-container">
      <form className="note-form" onSubmit={(event) => handleSubmit(event)} >
        <input type="text" value={title} onChange={(event)=> setTitle(event.target.value) } placeholder='title' required />
        <textarea value={content} onChange={(event)=>  setContent(event.target.value)} placeholder='Content' rows={10} required></textarea>
        <button type="submit">Add Note</button>
        </form>
    
  <div className="notes-grid">
    {notes.map((note)=>  (
       <div className="note-item">
       <div className="notes-header">
         <button>X</button>
       </div>
       <h2>{note.title}</h2>
         <p>{note.content}</p>
     </div>
     ))}





   
  </div>
  </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
 import { useState } from "react"


const Home = () => (
  <div> <h2>TKTL notes app</h2> </div>
)

const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map(note =>
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.content}</Link>
        </li>
      )}
    </ul>
  </div>
)

const Users = () => (
  <div> <h2>Users</h2> </div>
)


const App =()=>{


  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])

  const [user, setUser] = useState(null)

  const padding = {
    padding: 5
  }
  return (
  
    <Router>
    <div>
      <Link style={padding} to="/">home</Link>
      <Link style={padding} to="/notes">notes</Link>
      <Link style={padding} to="/users">users</Link>
    </div>

    <Routes>
        <Route path="/notes" element={<Notes notes={notes}/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>


<div>
<i>Note app, Department of Computer Science 2022</i>
</div>

  </Router>
  )
}

export default App;


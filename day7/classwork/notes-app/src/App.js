import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NoteAdd } from './pages/note-add'
import { NotesList } from './pages/note-list'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={<Signin />} />
        <Route path='/signup' Component={<Signup />} />
        <Route path='/note-list' Component={<NotesList />} />
        <Route path='/note-add' Component={<NoteAdd />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

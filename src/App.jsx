import { useState } from 'react'
import ContactList from './components/ContactList'
import './App.css'
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <div>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </div>
  )
}

export default App

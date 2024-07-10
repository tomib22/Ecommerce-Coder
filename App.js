import './App.css'
import React from 'react'
import Navbar from './Components/NavBar/NavBar'
import ItemlistContainer from './Components/Itemlistcontainer/Itemlistcontainer'
function App() {
  return (
    <div classname="App">
        <Navbar/>
        <ItemlistContainer greeting={'Bienvenidos a la tienda'}/>
  </div>
  )
}

export default App

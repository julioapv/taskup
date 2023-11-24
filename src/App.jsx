import { Reac } from 'react'
import { useState } from 'react'
import { Header } from './components/Header'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItems'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='flex items-center justifi-between flex-col text-center bg-blue-200 w-full h-full'>
      <Header />
      <TodoList />
      <Footer />
    </div>
  )
}

export default App

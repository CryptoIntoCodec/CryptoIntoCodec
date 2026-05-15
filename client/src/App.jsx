import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import { ThemeProvider } from './theme/ThemeContext'

export default function App(){
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:id" element={<ProjectDetail/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

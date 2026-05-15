import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home(){
  return (
    <section>
      <h1>Hi, I'm Rahul</h1>
      <p className="card">Welcome to my portfolio — a short showcase of my work.</p>
      <h2 style={{marginTop:20}}>Featured Projects</h2>
      <div className="projects" style={{marginTop:12}}>
        {projects.slice(0,4).map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}

import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  return (
    <section>
      <h1>Projects</h1>
      <div className="projects" style={{marginTop:12}}>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}

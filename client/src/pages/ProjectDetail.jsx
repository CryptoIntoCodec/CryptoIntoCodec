import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectDetail(){
  const { id } = useParams()
  const project = projects.find(p => String(p.id) === id)
  if(!project) return (
    <section>
      <h2>Project not found</h2>
      <p><Link to="/projects">Back to projects</Link></p>
    </section>
  )

  const base = project.image ? project.image.replace(/\.svg$/,'') : null

  return (
    <section>
      <h1>{project.title}</h1>
      <div className="card project-detail" style={{marginTop:12}}>
        {project.image && (
          <picture>
            <source type="image/webp" srcSet={`${base}-768.webp 768w, ${base}-1200.webp 1200w`} />
            <source type="image/png" srcSet={`${base}-768.png 768w, ${base}-1200.png 1200w`} />
            <img src={`${base}-1200.png`} alt={project.title} style={{maxWidth:'100%',borderRadius:8}} loading="lazy" decoding="async" />
          </picture>
        )}
        <p style={{marginTop:12}}>{project.description}</p>
        {project.repo && <p>Repo: <a href={project.repo} target="_blank" rel="noreferrer">{project.repo}</a></p>}
        {project.link && <p>Live: <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a></p>}
        <p style={{marginTop:8}}><Link to="/projects">← Back to projects</Link></p>
      </div>
    </section>
  )
}

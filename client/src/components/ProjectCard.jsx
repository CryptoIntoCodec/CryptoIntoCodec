import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({project}){
  const base = project.image ? project.image.replace(/\.svg$/,'') : null
  return (
    <article className="card">
      {project.image && (
        <Link to={`/projects/${project.id}`}>
          <picture>
            <source type="image/webp" srcSet={`${base}-480.webp 480w, ${base}-768.webp 768w, ${base}-1200.webp 1200w`} />
            <source type="image/png" srcSet={`${base}-480.png 480w, ${base}-768.png 768w, ${base}-1200.png 1200w`} />
            <img src={`${base}-1200.png`} alt={project.title} style={{width:'100%',borderRadius:8,objectFit:'cover',height:140}} loading="lazy" decoding="async" />
          </picture>
        </Link>
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>
        <Link to={`/projects/${project.id}`}>Details</Link>
        {project.link && <span style={{marginLeft:12}}><a href={project.link} target="_blank" rel="noreferrer">Live</a></span>}
      </p>
    </article>
  )
}

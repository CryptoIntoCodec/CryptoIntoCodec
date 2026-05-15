import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState(null)

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/contact',{
        method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok){
        setStatus('sent')
        setForm({name:'',email:'',message:''})
      } else {
        setStatus(data.error || 'error')
      }
    }catch(err){setStatus('error')}
  }

  return (
    <section>
      <h1>Contact</h1>
      <form className="card" onSubmit={submit} style={{marginTop:12,maxWidth:600}}>
        <div className="form-row">
          <label>Name</label>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        </div>
        <div className="form-row">
          <label>Message</label>
          <textarea rows={6} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
        </div>
        <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send'}</button>
        <div style={{marginTop:8}}>
          {status === 'sent' && <span style={{color:'green'}}>Message sent — thank you!</span>}
          {status === 'error' && <span style={{color:'crimson'}}>There was an error. Try again later.</span>}
          {status && status !== 'sent' && status !== 'sending' && status !== 'error' && <span>{status}</span>}
        </div>
      </form>
    </section>
  )
}

const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  // If SMTP configured, try to send email
  if(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.TO_EMAIL){
    try{
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      })
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.TO_EMAIL,
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
      })
      return res.json({ ok: true })
    }catch(err){
      console.error('Mail error', err)
      return res.status(500).json({ error: 'Failed to send email' })
    }
  }

  // Fallback: append to local file
  const file = path.join(__dirname,'contacts.json')
  let arr = []
  try{ if(fs.existsSync(file)) arr = JSON.parse(fs.readFileSync(file)) }catch(e){}
  arr.push({ name, email, message, date: new Date().toISOString() })
  fs.writeFileSync(file, JSON.stringify(arr,null,2))
  res.json({ ok: true, stored: true })
})

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log('Server listening on', port))

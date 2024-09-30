import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)

const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

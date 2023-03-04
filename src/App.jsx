import { useState } from 'react'
import reactLogo from './assets/react.svg'
import gmgnLogo from './assets/gmgn-logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <a href="https://gmgn.app" target="_blank">
          <img src={gmgnLogo} className="logo react" alt="GmGn logo" />
        </a>
      </div>
      <h1>GM ☀️ / GN 🌙</h1>
      <h2>Open-source multi-chain crypto wallet on the browser</h2>
      <div className="card">
        <p>
          Follow <a href="https://twitter.com/0xstim" target="_blank">@0xStim Twitter</a> for new updates.
        </p>
        <p>
          Contact <a href="https://t.me/zxstim" target="_blank">@zxstim on Telegram</a> for any partnerships.
        </p>
      </div>
      <p className="read-the-docs">
        Solo build by <a href="https://twitter.com/0xstim" target="_blank">@0xStim</a>
      </p>
    </div>
  )
}

export default App

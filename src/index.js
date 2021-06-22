import ReactDOM from 'react-dom'
import React from 'react'
import Home from './views/Home'
import PersonagensContextProvider from './contexts/PersonagensContextProvider'
import './index.css'

ReactDOM.render(
    <PersonagensContextProvider>
        <Home />
    </PersonagensContextProvider>,
    document.getElementById("root")
)
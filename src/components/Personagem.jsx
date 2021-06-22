import React from 'react'
import './Personagem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Personagem = props => {

    return (<div className="Personagem" style={{color: props.eye_color, borderColor: props.eye_color }}>
        <h2>{props.name}</h2>
        <button 
            onClick={ _ => props.removerPersonagem() }
            className="btnRemover" 
            style={{border: `solid 1px ${props.eye_color}`, borderColor: props.eye_color, color: 'black'}}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    </div>)

}

export default Personagem;
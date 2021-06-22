import React, { useContext } from 'react'
import { PersonagensContext } from '../contexts/PersonagensContextProvider';
import Personagem from '../components/Personagem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './Home.css'

const Home = props => {
    
    const { personagens, loadingPersonagens, removePeopleByKey } = useContext(PersonagensContext)

    const list = () => {

        return  <div className="Home">
            <ul className="Personagens">
                    <li>
                        { personagens.map( (personagem, key) => <Personagem key={key} { ...personagem } removerPersonagem={() => {
                            removePeopleByKey(key)
                        }} />) }
                    </li>
                </ul>
        </div>
    }

    return !loadingPersonagens ? list() : <FontAwesomeIcon icon={faSpinner} className="fa-spin" />;
}

export default Home;
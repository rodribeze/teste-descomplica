import React, { createContext, useState, useEffect } from 'react'
import { fetchPeoples } from '../helpers/api'

export const PersonagensContext = createContext()

const PersonagensContextProvider = props => {

    const [personagens,setPersonagens] = useState([])
    const [loadingPersonagens,setLoadingPersonagens] = useState(true)

    useEffect(() => {

        const fetch = () => {

            setLoadingPersonagens(true)

            fetchPeoples()
                .then( response => setPersonagens(response.results) )
                .finally( () => setLoadingPersonagens(false) )

        }

        fetch()

    },[])


    const removePeopleByKey = (key) => {

        setPersonagens( personagens.filter( (_,k) => k !== key ) )

    }

    return (<PersonagensContext.Provider value={{
        personagens,
        loadingPersonagens,
        removePeopleByKey
    }}>
        { props.children }
    </PersonagensContext.Provider>);

};

export default PersonagensContextProvider
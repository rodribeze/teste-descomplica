
const base = 'https://swapi.dev/api'

export const fetchPeoples = async (search) => {

    let url = new URL(`${base}/people/`)
    let params = {}

    if(search){
        params.search = search
    }

    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url)
    const json = await response.json()
    return json;
} 
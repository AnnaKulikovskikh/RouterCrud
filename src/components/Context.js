import React, {useState} from "react"
const Context = React.createContext()

function ContextProvider(props) {
    const url = "http://localhost:7777/posts" 
    const [allCards, setCards] = useState([])

    function load() {
        fetch(url)
            .then(res => res.json())
            .then(data => setCards(data))
    }

    function add(note) {
        setCards(prevCards => [...prevCards, note])
    }

    return (
        <Context.Provider value={{allCards, add, load}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
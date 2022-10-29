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

    async function del(id) {
        const options = {
            method: "DELETE"
        }
        const response = await fetch(`${url}/${id}`, options)
        if (response.ok) {
            setCards([])
            load()
        } else {
            alert ("Ошибка HTTP: " + response.status)
        }
    }

    async function add(text) {
        const add = {
            id: 0,
            content: text
        }
        const options = {
            method: "POST",
            body: JSON.stringify(add),
            headers: {"Content-Type": "application/json"}
        }
        let response = await fetch(url, options)
        if (response.ok) {
            load()
        } else {
            alert ("Ошибка HTTP: " + response.status)
        }
    }

    return (
        <Context.Provider value={{allCards, load, del , add}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
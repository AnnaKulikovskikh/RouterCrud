import { Link } from "react-router-dom"
import { useRef } from "react"

export default function Creation() {
    const url = "http://localhost:7777/posts" 
    const field = useRef(null)

    // function load() {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    async function load() {
    const res = await fetch(url)
    console.log(res)
    const data = await res.json()
    console.log(data)
    }

    async function submit(event) {
        event.preventDefault()
        const addArea = field.current
        if (!addArea.value) return null
        const add = {
            content: addArea.value,
          }
        
        addArea.value = ""  
        const options = {
            method: "POST",
            body: JSON.stringify(add),
            headers: {"Content-Type": "application/json"}
        }
        //console.log(options)

        let response = await fetch(url, options)
        console.log(response)
        // if (response.ok) {
        //     load()
        //   } else {
        //     alert ("Ошибка HTTP: " + response.status)
        //   }

    }

    return (
        <div className="creation">
            <nav>
                <ul className="nav-list">
                    <li>Публикация</li>
                    <li>Фото/видео</li>
                    <li>Прямой эфир</li>
                    <li>Еще</li>
                    
                </ul>
                <button className="create-exit"><Link to="/">❌</Link></button>
            </nav>
            <form className="addNote" onSubmit={submit}> 
                <textarea className="addArea" ref={field}></textarea>
                <button className="addBtn" type="submit">Опубликовать</button>
                {/* <button className="addBtn" type="submit"><Link to="/">Опубликовать</Link></button> */}
            </form>

            <button onClick={load}>LOAD</button>
        </div>
    )
}
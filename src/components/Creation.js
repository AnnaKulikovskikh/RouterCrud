import { Link } from "react-router-dom"
import { useRef } from "react"
import { Context } from "./Context"
import { useContext } from "react"

export default function Creation() {
    const field = useRef(null)
    const {add} = useContext(Context)

    function submit(event) {
        event.preventDefault()
        const addArea = field.current
        addArea.focus()
        if (!addArea.value) return null
        add(addArea.value)
        addArea.value = ""
        window.location.href = "/"
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
                <button className="create-exit"><Link to="/">✖</Link></button>
            </nav>
            <form className="addNote" onSubmit={submit}> 
                <textarea className="addArea" ref={field}></textarea>
                <button className="addBtn" type="submit">Опубликовать</button>
            </form>
        </div>
    )
}
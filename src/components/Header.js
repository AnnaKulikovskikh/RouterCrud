import { Link } from "react-router-dom"
import Note from "./Note"
import {Context} from "./Context"
import { useContext, useEffect } from "react"

export default function Header() {
    const {allCards, load} = useContext(Context)
    useEffect(() => load(), [])
    const cards = allCards.map(card => {
        return (
            <Note key={card.id} content={card.content} created={card.created} id={card.id}/>
        )
    })

    return (
        <>
            <header>
                <div className="header">
                    <Link to="/creation"><button className="addBtn">Создать пост</button></Link>
                </div>
            </header>
            {cards}
        </>
    )
}
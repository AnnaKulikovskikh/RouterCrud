import { Link } from "react-router-dom"
import Note from "./Note"
// import {Context} from "./Context"
// import { useContext } from "react"

export default function Header() {
    //const {allCards} = useContext(Context)

    // const cards = allCards.map(card => {
    //     <Note key={card.id} content={card.content} created={card.created}/>
    // })

    return (
        <>
            <header>
                <div className="header">
                    <button className="addBtn"><Link to="/creation">Создать пост</Link></button>
                </div>
            </header>
            <Note content="12345"/>
            {/* {cards} */}
        </>
    )
}